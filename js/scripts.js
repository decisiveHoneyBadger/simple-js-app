
/* In the frist line below, I first start defining the framework of the for loop - consisiting of three parts.
The first part is the initialization, "let i = 0;" 
followed by the condition, "i < pokemonList.length;" 
and finally the action part, "i++" 

Then, I begin writing a DOM through document.write() in order to display the name and height of the above array's items.
The height is supposed to be shown just next to the name: “Bulbasaur (height: 7)”
The loop is set until reaching the same length as the array. Because the item "Exploud" is exactly
1.5 height tall, it fulfills the condition. Therefore, the string, "This is a big guy!", is being shown right
after it.
*/

function divide(dividend, divisor){
  if(divisor === 0){
    return "You’re trying to divide by zero."
  }else{
    let result = dividend / divisor;
    return result;
  }
}

// this is the beginning of the IIFE
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      weight: 6.9,
      types: ["grass", "poison"],
    },
    {
      name: "Exploud",
      height: 1.5,
      weight: 84,
      types: ["normal"],
    },
    {
      name: "Jynx",
      height: 1.4,
      weight: 40.6,
      types: ["psychic", "ice"],
    },
    {
      name: "Bulbasar",
      height: 0.7,
      weight: 6.9,
      types: ["grass", "poison"],
    }
  ];

  function getAll() {
    return pokemonList;
  }
 
  /**
   * adds only pokemons provided they are valid objects
   * and validates all parameters necessary
   * 
   * @param {*} pokemon this is the pokemon object
   */
  function addValidate(pokemon) {
    if (typeof pokemon === 'object' && !Array.isArray(pokemon)) {
      if ((Object.keys(pokemon)[0] === 'name' && typeof Object.values(pokemon)[0] === 'string') &&
          (Object.keys(pokemon)[1] === 'height' && typeof Object.values(pokemon)[1] === 'number') &&
          (Object.keys(pokemon)[2] === 'weight' && typeof Object.values(pokemon)[2] === 'number') &&
          (Object.keys(pokemon)[3] === 'types' && Array.isArray(Object.values(pokemon)[3]))) {
            pokemonList.push(pokemon);
      } else {
        window.alert('this is not a valid pokemon object');
      }
    }
  }

/**
 * finds the pokemon object based on the given search term 
 * 
 * @param {*} searchTerm to look for the key name and its value 
 * @returns the searched pokemon object
 */
function findPokemon(searchTerm) {
  return pokemonList.filter(o => 
    o['name'].toLowerCase().includes(searchTerm.toLowerCase()));
}
/**
 * adds a pokemon list item
 * @param {*} pokemon to add to the list
 */
function addListItem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button');
  pokemonList.appendChild(listItem);
  pokemonList.appendChild(button);

 // adding an event listener for button (variable)
  button.addEventListener("click", showDetails);
/**
 * adds the event listener to the newly created button
 * @param {*} button refers to the declared button above
 * @param {*} pokemon refers to the pokemon object
 */
function showDetails(click, button, pokemon) {
  alert(`Hey, it's me`);
}
}

// adds a function
function showDetails(pokemon) {
  console.log(pokemon);
}
// makes the functions public (usable) and accessable
  return {
    addValidate: addValidate,
    getAll: getAll,
    findPokemon: findPokemon,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

// adding a valid pokemon to pokemonList in pokemonRepository (IIFE)
pokemonRepository.addValidate({ name:'pokemon', height: 1.2, weight: 20.6, types: ['fire']});
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.findPokemon('Bul'));
pokemonRepository.addValidate({ name: 1, height: 1.2, weight: 20.6, types: ['fire']});

// DOM manipulation
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});





/*

*/







