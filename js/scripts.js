
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
  } else {
    let result = dividend / divisor;
    return result;
  }
}


  let pokemonList = [
    {
      name: "Xatu",
      height: 1.5,
      weight: 15,
      types: ["psychic", "flying"],
    },
    {
      name: "Exploud",
      height: 1.5,
      weight: 84,
      types: ["normal"],
    },
    {
      name: "Hypno",
      height: 1.6,
      weight: 75.6,
      types: ["psychic"],
    },
    {
      name: "Slaking",
      height: 2.0,
      weight: 130.5,
      types: ["normal"],
    },
    {
      name: "Zekrom",
      height: 2.9,
      weight: 345,
      types: ["dragon", "electric"],
    },
    {
      name: "Ho-oh",
      height: 3.8,
      weight: 199,
      types: ["fire", "flying"],
    },
    {
      name: "Deoxys",
      height: 1.7,
      weight: 60.8,
      types: ["psychic"],
    },
    {
      name: "Giratina",
      height: 4.5,
      weight: 750,
      types: ["dragon", "ghost"],
    },
    {
      name: "Absol",
      height: 1.2,
      weight: 47,
      types: ["dark"],
    },
    {
      name: "Yamask",
      height: 0.5,
      weight: 1.5,
      types: ["ghost"],
    }
  ]


  function getAll() {
    return pokemonList;
  }
  function addListItem() {
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  }
 
  /**
   * adds only pokemons provided they are valid objects
   * and validates all parameters necessary
   * 
   * @param {*} pokemon this is the pokemon object
   */
  function addValidate(pokemon) {
    if (typeof(pokemon) === 'object' && !Array.isArray(pokemon)) { 
      if ((Object.keys(pokemon)[0] === 'name' && typeof Object.values(pokemon)[0] === 'string') && 
          (Object.keys(pokemon)[1] === 'height' && typeof Object.values(pokemon)[1] === 'number') &&
          (Object.keys(pokemon)[2] === 'weight' && typeof Object.values(pokemon)[2] === 'number') &&
          (Object.keys(pokemon)[3] === 'types' && Array.isArray(Object.values(pokemon)[3])) &&
          (Object.keys(pokemon)[4] === 'name' && typeof Object.values(pokemon)[4] === 'string') &&
          (Object.keys(pokemon)[5] === 'height' && typeof Object.values(pokemon)[5] === 'number') &&
          (Object.keys(pokemon)[6] === 'weight' && typeof Object.values(pokemon)[6] === 'number') &&
          (Object.keys(pokemon)[7] === 'types' && Array.isArray(Object.values(pokemon)[7])) &&
          (Object.keys(pokemon)[8] === 'name' && typeof Object.values(pokemon)[8] === 'string') &&
          (Object.keys(pokemon)[9] === 'height' && typeof Object.values(pokemon)[9] === 'number')) {
            pokemonList.push(pokemon)
            } 
      else {
        alert('this is not a valid pokemon object');
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
//function showDetails(click, button, pokemon) {
 // alert(`Hey, it's me`);
//}
}

// adds a function
function showDetails(pokemon) {
  console.log(pokemon);
}
// makes the functions public (usable) and accessable
function main(){
  pokemonList.forEach((pokemon)=>{
      var ul = document.getElementById("pokemon-list");
      var li = document.createElement("button");
      li.setAttribute("id",pokemon["name"])
      li.onclick = function(){
        alert("My name is " + pokemon.name+" and my special power is "+pokemon.types);
        console.log(pokemon.name)

      }
      var break1 = document.createElement("br");
      var break2 = document.createElement("br")
      li.appendChild(document.createTextNode(pokemon["name"]))
      ul.appendChild(li);
      ul.appendChild(break1);
      ul.appendChild(break2);  })
  // return {
  //   addValidate: addValidate,
  //   getAll: getAll,
  //   findPokemon: findPokemon,
  //   addListItem: addListItem,
  //   showDetails: showDetails
  // }
}//})();

// adding a valid pokemon to pokemonList in pokemonRepository (IIFE)
// pokemonRepository.addValidate({ name:'pokemon', height: 1.2, weight: 20.6, types: ['fire']});
// console.log(pokemonRepository.getAll());
// console.log(pokemonRepository.findPokemon('Bul'));
// pokemonRepository.addValidate({ name: 1, height: 1.2, weight: 20.6, types: ['fire']});

// // DOM manipulation
// pokemonRepository.getAll().forEach(function(pokemon) {
//  pokemonRepository.addListItem(pokeomon);




//   pokemonRepository.addListItem(pokemon);
//   pokemonList.push(pokemon);
// });
