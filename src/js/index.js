const lista = document.querySelectorAll('.pokemon');
const card = document.querySelectorAll('.cartao-pokemon');

lista.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        const idPokemonSelecionado = pokemon.attributes.id.value;

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado);
        cartaoPokemonParaAbrir.classList.add('aberto');

        const listaPokemonAtivo = document.querySelector('.ativo');
        listaPokemonAtivo.classList.remove('ativo');

        const pokemonSelecionadoLista = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoLista.classList.add('ativo');
    });
});