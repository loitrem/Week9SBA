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
let getSimpsonsInfo = new XMLHttpRequest();
getSimpsonsInfo.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var simpsonsInfo = JSON.parse(this.responseText);
    document.getElementById("image").src = simpsonsInfo.image.medium;
    // document.getElementById("name").innerHTML = myObj.name;
  }
};

getSimpsonsInfo.open("GET", "http://api.tvmaze.com/shows/83", true);
getSimpsonsInfo.send();