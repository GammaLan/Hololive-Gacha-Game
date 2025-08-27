//Characters and Pictures from Hololive Production and it's respective authors
// Hololive Website: https://en.hololive.tv/
const gen0 = ["sora","roboco","miko","suisei","AZKi"];
const gen1 = ["mel","fubuki","matsuri","aki","haato"];
const gen2 = ["aqua","shion","ayame","choco","subaru"];
const gengamers = ["mio","okayu","korone"];
const gen3 = ["pekora","flare","rushia","noel","marine"];
const gen4 = ["kanata","watame","coco","towa","luna"];
const cards = [gen0,gen1,gen2,gen3,gen4,gengamers];

//A list of all the background colors for the cards
const colors = ["rgb(166, 247, 136)","rgb(136, 234, 247)","rgb(236, 247, 136)","rgb(247, 173, 136)"];

var collections = [];

//Random Function From w3schools.com
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//Function that sorts the card to its respective "generation" box.
function sortCard(card,generation){
	let selected;
	
	//If generation is equal to 5, set it equal to gen gamers
	if (generation == 5){
		selected = "gengamers";
	}
	else{
		selected = "gen" + generation;
	}
	
	
	//Modified code from w3schools.com
	const div = document.getElementById(selected);
	
	//Put the card element into the div element.
	div.appendChild(card);
}

function showCard(card){
	//Get the gacha card element and put the recieved card's source and background color if there is one.
	let gachacard = document.getElementById("gachacard");

	gachacard.src = card.src;
	gachacard.style.backgroundColor = card.style.backgroundColor;
	
	//Find the card's background color and return the index in the list of colors
	let index = colors.indexOf(card.style.backgroundColor);
	let border = "";
	
	//If the class name is gold, turn the border into gold.
	if (card.className == "gold"){
		border = "rgb(255,215,0)";
	}
	//Otherwise, create a border color
	else{
		//Loops through the colors list where it will add the index's color
		//until it reaches the current background color
		for (let i = 0; i <= index; i++){
			border += colors[i] + " ";
		}
	}
	gachacard.style.borderColor = border;
}

function getRandomCard() {
	//Initialize all the variables
	let list = getRndInteger(0,cards.length);;
	let num = getRndInteger(0,cards[list].length);
	let index;
	let card;
	
	//Check if the player has the card yet.
	if (!(collections.includes(cards[list][num]))){
		collections.push(cards[list][num])
		//Create an image element and put it into the website. (Help from w3schools.com)
		card = document.createElement("IMG");
		//Put attributes on the image element. Includes the source, width, id, and class.
		card.setAttribute("src",cards[list][num] + '.png')
		card.setAttribute("width", "100");
		card.setAttribute("id", cards[list][num]);
		card.setAttribute("class", "none");
		
		//Find the card's background color; but since there is none, it will return -1
		index = colors.indexOf(card.style.backgroundColor);
		sortCard(card,list)
	}
	else{
		card = document.getElementById(cards[list][num]);

		//Find the card's background color; if it can't find it, it will return -1
		index = colors.indexOf(card.style.backgroundColor);
		
		//If the index is the last item of the list (the length of the array - 1), do nothing to the card.
		if (index == colors.length - 1){
			card.style.borderColor = "rgb(255,215,0)";
			card.className = "gold";
			
		}
		else{
		//Use the index position and add one to cycle to the next color in the array.
		card.style.backgroundColor = colors[index + 1];
		}
	}
	showCard(card);
}