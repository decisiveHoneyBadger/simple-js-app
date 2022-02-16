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

for (let i = 0; i < pokemonList.length; i++) {
  
  if (pokemonList[i].height >= 1.5) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "This is a big guy!")
  } else {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ")
  }
}
