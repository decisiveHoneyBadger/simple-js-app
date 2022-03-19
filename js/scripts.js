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

function divide(dividend, divisor) {
  if (divisor === 0) {
    return "You’re trying to divide by zero.";
  } else {
    let result = dividend / divisor;
    return result;
  }
}

let pokemonRepository = (function () {
  let pokemonList = [];
  // this is the list of pokemons
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=3";

  /**
   * adds only pokemons provided they are valid objects
   * and validates all parameters necessary
   *
   * @param {*} pokemon this is the pokemon object
   */
  function addValidate(pokemon) {
    if (typeof pokemon === "object" && !Array.isArray(pokemon))
      if (typeof pokemon === "object" && "name" in pokemon) {
        pokemonList.push(pokemon);
      } else {
          console.log("pokemon is not correct");
      }
  }

  function getAll() {
    console.log('test2');
    return pokemonList;
   
  }

  /**
   * finds the pokemon object based on the given search term
   *
   * @param {*} searchTerm to look for the key name and its value
   * @returns the searched pokemon object
   */
  function findPokemon(searchTerm) {
    return pokemonList.filter((o) =>
      o["name"].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  /**
   * adds a pokemon list item (DOM manipulation)
   * @param {*} pokemon to add to the list
   */
  function addListItem(pokemon) {
    console.log('test3');
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    pokemonList.appendChild(listItem);
    pokemonList.appendChild(button);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  /**
   * PROMISE FUNCTION - the LoadList() method will fetch data from the API and adds add each Pokémon
   * in the fetched data to pokemonList with the add function
   * @returns
   */
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          addValidate(pokemon);
          console.log(pokemon);
          console.log('test');
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  

  // this function should get a Pokémon’s details logged to the console when clicking the button.
  function showDetails(item) {
      console.log(`Hey, my name is ${item.name}`);
  }

  return {
    addValidate: addValidate,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    showDetails: showDetails,
  };
})();

//makes the functions public (usable) and accessable
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


