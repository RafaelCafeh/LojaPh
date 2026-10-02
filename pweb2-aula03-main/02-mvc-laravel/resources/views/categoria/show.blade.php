@extends('layouts.app')

@section('titulo', $categoria->nome . ' — Laravel MVC')

@section('conteudo')
    <span class="badge">Projeto 2 · Laravel MVC</span><br>
    <a class="voltar" href="/">← Voltar para a listagem</a>

    <div class="detalhe">
        <div class="emoji">{{ $categoria->emoji }}</div>
        <div class="info">
            <span class="cat">{{ $categoria->categoria }}</span>
            <h1>{{ $categoria->nome }}</h1>
            <p class="desc">{{ $categoria->descricao }}</p>
            <p class="preco-lg">R$ {{ number_format($categoria->preco, 2, ',', '.') }}</p>
            <p class="estoque">{{ $categoria->estoque }} unidades em estoque</p>
        </div>
    </div>
@endsection