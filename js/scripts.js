//wrapping the code in IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20'; //using fetch in repo

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }
  function getAll() {
    return pokemonList;
  }

  //addListItem function task 1.6 and deleting document.write
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    listpokemon.classList.add('group-list-item');
    listpokemon.classList.add('mb-1');

    let button = document.createElement('button'); // create button

    let orderAttrNode = document.createAttribute('data-toggle');
    orderAttrNode.value = 'modal'; //or modal
    button.setAttributeNode(orderAttrNode);

    let orderAttrNode1 = document.createAttribute('data-target');
    orderAttrNode1.value = '#exampleModalCenter'; //or modal
    button.setAttributeNode(orderAttrNode1);

    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.classList.add('btt');
    button.classList.add('btn-primary');

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () {
      //addEventListener
      showDetails(pokemon);
    });
  }

  function loadList() {
    //loadList
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          console.log(item);
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function loadDetails(item) {
    //loadDetails
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //adding showModal
      showModal(pokemon);
    });
  }

  //exercise 1.8 the modal container
  function showModal(item) {
    let modalTitle = $('.modal-title');
    let modalBody = $('.modal-body');

    modalTitle.empty();
    modalBody.empty();

    modalTitle.text(item.name);

    let imageElementFront = window.$(
      '<img class ="modal-img" style="width:50%">'
    );
    imageElementFront.attr('src', item.imageUrl);

    let heightElement = $('<p>' + 'height : ' + item.height + '</p>');

    let typeElement = document.createElement('p');
    let typeArray = item.types.map(function (index) {
      return index.type.name;
    });

    typeElement.innerText = 'type:';
    typeArray.forEach(function (type) {
      typeElement.innerText += ' '  + type;
    });

    modalBody.append(imageElementFront);
    modalBody.append(heightElement);
    modalBody.append(typeElement);
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
