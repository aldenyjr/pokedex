function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function convertPokemonToLi(pokemon) {
  return `    
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${convertPokemonTypesToLi(pokemon.types).join("")}
      </ol>
      <img
        src="${pokemon.sprites.other.dream_world.front_default}"
        alt="${pokemon.name}"
      />
    </div>
  </li>
    `;
}
const pokemonOl = document.querySelector(".pokemons");

pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonOl.innerHTML = pokemonList.map(convertPokemonToLi).join("");

  //   const newList = pokemonList.map((pokemon) => convertPokemonToLi(pokemon));
  //   const newHtml = newList.join("");
  //   pokemonOl.innerHTML += newHtml;
  //   ----------------
  //   const listItens = [];
  //   for (let i = 0; i < pokemonList.length; i++) {
  //     const pokemon = pokemonList[i];
  //     listItens.push(convertPokemonToLi(pokemonList));
  //   }
  //   console.log(listItens);
});
