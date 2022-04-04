let pokemonRepository = (function () {
  let e = [],
    t = 'https://pokeapi.co/api/v2/pokemon/?limit=20',
    o = document.querySelector('.modal-container');
  function n(t) {
    'object' == typeof t && 'name' in t && 'detailsUrl' in t
      ? e.push(t)
      : console.log('pokemon is not correct');
  }
  function l(e) {
    let t = e.detailsUrl;
    return fetch(t)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageUrl = t.sprites.front_default),
          (e.height = t.height),
          (e.types = t.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function i(e) {
    l(e).then(function () {
      c(e.name, e.height, e.types, e.imageUrl),
        console.log(
          'pokemon selected: ' +
            e.name +
            'is' +
            e.height +
            'and with the abilities of' +
            e.types,
        );
    });
  }
  function c(e, t, o, n) {
    let l = document.querySelector('.modal-container');
    (l.style.display = 'block'),
      (document.querySelector('.modal__title').innerText = e);
    let i = 'Height: ' + t;
    (document.querySelector('.modal__text').innerHTML = i),
      document.querySelector('.modal__img').setAttribute('src', n),
      console.log(n),
      document.querySelector('.modal-close').addEventListener('click', a),
      window.addEventListener('keydown', (e) => {
        console.log(e.key),
          'Escape' === e.key && (l.style.display = 'block'),
          a();
      }),
      l.classList.add('is-visible');
  }
  function a() {
    document.querySelector('.modal-container').style.display = 'none';
  }
  return {
    add: n,
    getAll: function () {
      return e;
    },
    addListItem: function (e) {
      let t = document.querySelector('.pokemon-list');
      o.id = 'exampleModalCenter';
      let n = document.createElement('li');
      n.classList.add('group-list-item');
      let l = document.createElement('button'),
        c = document.createAttribute('data-toggle');
      (c.value = 'modal-container'), l.setAttributeNode(c);
      let a = document.createAttribute('data-target');
      (a.value = '#exampleModalLong'),
        l.setAttributeNode(a),
        (l.innerText = e.name),
        l.classList.add('btn'),
        l.classList.add('btt'),
        l.classList.add('btn-primary'),
        n.appendChild(l),
        t.appendChild(n),
        l.addEventListener('click', function () {
          i(e);
        });
    },
    loadList: function () {
      return fetch(t)
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            console.log(e), n({ name: e.name, detailsUrl: e.url });
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: l,
    showDetails: i,
    showModal: c,
    hideModal: a,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
