function divide(dividend, divisor) {
  if (divisor === 0) {
    return "You’re trying to divide by zero.";
  } else {
    let result = dividend / divisor;
    return result;
  }
}


// here starts the IIFE
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
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }


  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  

  // this function should get a Pokémon’s details logged to the console when clicking the button.
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(`Hey, my name is ${item.name} and my height is ${item.height}`);
    }); 
  }


  showLoadingMessage() 
  
  
  hideLoadingMessage()





  return {
    addValidate: addValidate,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//makes the functions public (usable) and accessable
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


