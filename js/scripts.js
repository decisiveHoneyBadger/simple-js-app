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
    type: ["psychic", "ice"],
  },
];

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

// I replaced the foor loop with this forEach loop
pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' tall ' + ( '<br>'));
});

function divide(dividend, divisor){
  if(divisor === 0){
    return "You’re trying to divide by zero."
  }else{
    let result = dividend / divisor;
    return result;
  }
}



let pokemonRepository;