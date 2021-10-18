let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  
 function changeTitle() { 
  let changeTitle = document.getElementById("main-title"); 
  changeTitle.innerHTML = "Hello, How's it going."
 }

  // Part 2
  
   function changeBackground () {
  document.body.style.background = "blue";
  }

  // Part 3

 let listItems = document
    .getElementById("favorite-things")
    .getElementsByTagName("li");

  let lastItem = listItems[listItems.length - 1];
  lastItem.parentNode.removeChild(lastItem);
  
  // Part 4
  // title.style.fontSize = 2 + 'rem'; 
  var elements = document.getElementsByClassName("special-title");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.fontSize = "2rem";
  }

  // Part 5
  
  function removeChicago() {
  let pastRaces = document.getElementById("past-races"); 
  // console.log(pastRaces.children); 
  let raceArr = [];

  for (i=0; i < pastRaces.children.length; i++ ) {
    let pastRaceList = pastRaces.children[i]; 
    raceArr.push(pastRaceList);
  }
  pastRaces.removeChild(raceArr[3]);
}

removeChicago();

  // Part 6
 //Add to DOM's Past Races list by creating a new <li> element and changing the new <li> text to the name of a city
  let lastItems3 = document.createElement("li");
  let lastItems3Append = document.createTextNode("New York City");

  lastItems3.appendChild(lastItems3Append);
  document.getElementById("past-races").appendChild(lastItems3);
  
  // Part 7
  
  const main = document.querySelector(".main");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  div.className = "blog-post purple";
  h1.textContent = "New York City";
  p.textContent = "Best City of The World";

  div.appendChild(h1);
  div.appendChild(p);
  main.appendChild(div);
}
