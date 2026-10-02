<?php

namespace App\Http\Controllers;

use App\Models\Categoria;

// CONTROLLER (o "C" do MVC).
//
// Recebe a requisição, pede os dados ao Model e escolhe qual View renderizar.
// Repare: aqui NÃO há SQL escrito à mão e NÃO há HTML. Cada camada no seu lugar.
class CategoriaController extends Controller
{
    // Listagem: GET /
    public function index()
    {
        $Categorias = Categoria::orderBy('id')->get();

        return view('categorias.index', [
            'categorias' => $Categorias,
        ]);
    }

    // Detalhe: GET /Categorias/{id}
    public function show(int $id)
    {
        // findOrFail devolve 404 automaticamente se o Categoria não existir.
        $Categoria = Categoria::findOrFail($id);

        return view('Categorias.show', [
            'Categoria' => $Categoria,
        ]);
    }
}
