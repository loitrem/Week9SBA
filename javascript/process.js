// const variables for drop down menu for small screens
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

//toggle menu function
function toggleMenu(){
  if (menu.classList.contains("active")){
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  }
  else{
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>"
  }
}

//check for click on menu icon
toggle.addEventListener('click', toggleMenu, false);

//loops through api to get a random simpsons quote. API is from = https://thesimpsonsquoteapi.glitch.me/
function quote(){  
    let getQuote = new XMLHttpRequest();
 
    getQuote.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let parsedQuote = JSON.parse(this.responseText);
        document.getElementById("quote_image").src = parsedQuote[0].image;
        document.getElementById("quote_name").innerHTML = parsedQuote[0].character;
        document.getElementById("quote_quote").innerHTML = parsedQuote[0].quote;
    }
    };
 
getQuote.open("GET", "https://thesimpsonsquoteapi.glitch.me/quotes", true);
getQuote.send();
 }

 function image(){
//get the simpsons image from an API. API is from = http://api.tvmaze.com/shows/83
let getSimpsonsInfo = new XMLHttpRequest();
getSimpsonsInfo.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let simpsonsInfo = JSON.parse(this.responseText);
    document.getElementById("image").src = simpsonsInfo.image.medium;

  }
};

getSimpsonsInfo.open("GET", "http://api.tvmaze.com/shows/83", true);
getSimpsonsInfo.send();

 }

function episodes() {
    
  let getEpisodeInfo = new XMLHttpRequest();
getEpisodeInfo.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let episodeInfo = JSON.parse(this.responseText);
    
  // get the reference for the body
  let body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  tbl.setAttribute("class", "episode_table");

  let tblBody = document.createElement("tbody");


  // creating all cells
  for (let i = 0; i < episodeInfo.length; i++) {
    // creates a table row
    let row = document.createElement("tr");

    
      // Create a <td> element and a text node, make tde text
      // node tde contents of tde <td>, and put tde <td> at
      // tde end of tde table row

      let cellImg = document.createElement("td");
      cellImg.setAttribute("width", "250px");
      cellImg.setAttribute("style", "");
      let img = document.createElement("img");
      img.setAttribute("src", episodeInfo[i].image.medium);
   
      cellImg.appendChild(img);
      row.appendChild(cellImg);

      let cellSeason = document.createElement("td");
      let season = document.createTextNode("Season: " + episodeInfo[i].season);
      cellSeason.appendChild(season);
      row.appendChild(cellSeason);

      let cellEpisode = document.createElement("td");
      let episode = document.createTextNode("Episode: " + episodeInfo[i].number);
      cellEpisode.appendChild(episode);
      row.appendChild(cellEpisode);

      let cellName = document.createElement("td");
      let name = document.createTextNode("Episode: " + episodeInfo[i].name);
      cellName.appendChild(name);
      row.appendChild(cellName);

      let cellSummary = document.createElement("td");
      let newSummary = episodeInfo[i].summary.substring(3, episodeInfo[i].summary.length - 4);
      let summary = document.createTextNode("Summary: " + newSummary);
      cellSummary.appendChild(summary);
      row.appendChild(cellSummary);
      

      
    

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  


}
};
getEpisodeInfo.open("GET", "http://api.tvmaze.com/shows/83/episodes", true);
getEpisodeInfo.send();


}
