const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json());
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const _URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(_URL)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => pokemonsDetails);
};

// Promise.all([
//   fetch("https://pokeapi.co/api/v2/pokemon/1"),
//   fetch("https://pokeapi.co/api/v2/pokemon/2"),
//   fetch("https://pokeapi.co/api/v2/pokemon/3"),
// ]).then((results) => {
//   console.log(results);
// });
