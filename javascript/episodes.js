function generate_table() {
    
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
        cellImg.setAttribute("width", "100px");
        cellImg.setAttribute("style", "");
        let img = document.createElement("img");
        img.setAttribute("src", episodeInfo[i].image.medium);
        img.setAttribute("width", "100px");
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

  generate_table();

  