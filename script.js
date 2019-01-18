// EXERCICE 1------------------------------------------
let cntCinema = document.createElement("div"); //container describing the chosen cinema 
document.body.appendChild(cntCinema);

function displayContainerCinema(container){

let titlePresentation = document.createElement("h1");//creation of the title of the container which is the name of the cinema.
cntCinema.appendChild(titlePresentation);
titlePresentation.textContent = "Cinéma Le Dauphin"

let paragraph = document.createElement("p");//characteristic of cinema.
cntCinema.appendChild(paragraph);
paragraph.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)";

let btnMoviesWeek = document.createElement("p");//creation of the button to take us to the next page
cntCinema.appendChild(btnMoviesWeek);
let btnInput = document.createElement("input");
btnMoviesWeek.appendChild(btnInput);
btnInput.type = "submit";
btnInput.value = "Voir les films à l’affiche cette semaine";
btnInput.style.border = "blue solid 1px";
btnInput.style.backgroundColor = "white";

btnMoviesWeek.addEventListener("click", changePage, false); //call the function to change pages when clicking 
function changePage() {//Creating the function to change pages
	cntCinema.hidden = true;
	cntMovies.hidden = false;
}
return;
};
displayContainerCinema(cntCinema)// call the function to display the first container


// Create a two-dimensional table
let moviesWeek = [
["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];

let cntMovies = document.createElement("div"); //create a second container
document.body.appendChild(cntMovies);
cntMovies.hidden = true; //Is not display

function displayTableMovies(table){
  let i = 1; //intermediate var used for the enumeration
  let j = 0;
  let k = 0;
  let currentElement; //intermediate var used for sequential processing nbr1
  let currentElement2;//nbr2
  let currentElement3;//nbr3

  let tableElement = document.createElement("table"); //Create a table
  cntMovies.appendChild(tableElement);

  let theadElement = document.createElement("thead"); //Thead element in the table tag that allows you to put a header
  tableElement.appendChild(theadElement);

  let trThead = document.createElement("tr");
  theadElement.appendChild(trThead);

  let tbodyElement = document.createElement("tbody");
  tableElement.appendChild(tbodyElement);

  currentElement3 = table[0];

  while (k < currentElement3.length) {
    let thElement = document.createElement("th"); //it will retrieve the element of index 0 of the table that are the headers.
    thElement.textContent = currentElement3[k];
    trThead.appendChild(thElement);
    k++;
};

while (i < table.length) {
	currentElement = table[i];
	j = 0;
    let trElement = document.createElement("tr");//Table rows 
    tableElement.appendChild(trElement);
    while (j < currentElement.length) {
    	currentElement2 = currentElement[j];
      let tdElement = document.createElement("td");//line cells
      tdElement.textContent = currentElement2;
      trElement.appendChild(tdElement);
      j++;
  }
  i++;
}
return tableElement;
};

displayTableMovies(moviesWeek);




// EXERCICE 2 -----------------------------

let tableChimical = [
["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
["acide acétique", "17", "118"],
["acide nitrique", "-41", "86"],
["acide sulfurique", "10", "290"],
["alcool éthylique", "-114", "78"],
["aluminium", "660", "2450"]
];


let cntChimicalSubstance = document.createElement("div"); //create a third container
document.body.appendChild(cntChimicalSubstance);

function  displayCondition (table, number){
	let i = 1;
	let j = 0;
	let currentElement; 
	let currentElement2;

	let table2 = []//creating the table that hosts the elements

	while (i < table.length) {
		currentElement = table[i]; //is worth the table line
		j = 2; //Recovers the 3rd cell corresponding to the debulking temperature 
		
		while (currentElement[j] < number) {   //continuation condition
			j=0; // takes the first value of the line
			currentElement2 = currentElement[j];
			table2.push(currentElement2);
		}
		i++;
	}
	return table2;
};

displayCondition(tableChimical, 120); //call function for 120°C