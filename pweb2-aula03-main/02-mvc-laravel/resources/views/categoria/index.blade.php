@extends('layouts.app')

@section('titulo', 'Loja — Laravel MVC')

@section('conteudo')
    <span class="badge">Projeto 2 · Laravel MVC</span>
    <h1>🛒 Loja Web 2</h1>
    <p class="sub">A View apenas exibe. Quem buscou os dados foi o Controller, através do Model.</p>

    <div class="grid">
        {{-- A View recebe $Categoria pronto do Controller e só percorre a lista. --}}
        @foreach ($categorias as $categoria)
            <a class="card" href="/Categoria/{{ $categoria->id }}">
                <div class="emoji">{{ $categoria->emoji }}</div>
                <span class="cat">{{ $categoria->categoria }}</span>
                <p class="nome">{{ $categoria->nome }}</p>
                <p class="preco">R$ {{ number_format($categoria->preco, 2, ',', '.') }}</p>
            </a>
        @endforeach
    </div>
@endsection