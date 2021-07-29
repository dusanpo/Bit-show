
    "use strict";


const a = window.location.search;

const urlId = (function index() {
     for (let i = 0; i < a.length; i++) {
        if (a[i] === "=") {
            return a.slice(i + 1);
         }
  
   }

})();
console.log(urlId);






const requestShow = "http://api.tvmaze.com/shows/" + urlId;


 fetch(requestShow, {
    method: "GET"
}).then(function (result){//show
    console.log(result);
    return result.json();
    
    
 }).then(function (response){
     console.log(response);
    
    



     const title = document.createElement("h1");
     title.textContent = response.name;
  
     const container = document.querySelector(".container");
    container.appendChild(title);

    const image = document.querySelector("#img");
    
     image.setAttribute("src", response.image.original);
  
     const showDetailsTitle = document.createElement("h3");
     showDetailsTitle.className = "details";
    showDetailsTitle.textContent = "Show Details";

     const details = document.createElement("div");
     details.className = 'col-md-12 col-sm-12';
     details.innerHTML = response.summary;
     console.log(details);

    
     const imageDiv = document.createElement("div");
     imageDiv.appendChild(image);
     imageDiv.appendChild(showDetailsTitle);
     imageDiv.appendChild(details);
    container.appendChild(imageDiv);
 

  });






const requestSeason = "http://api.tvmaze.com/shows/" + urlId + '/seasons';



fetch(requestSeason, {
   method: "GET" 
}).then(function (result){//showSeason
    console.log(result);
    return result.json();
    
    
 }).then(function (seasons){
     console.log(seasons);
    
    

     const listOfSeasons = document.createElement("ul");
    const seasonsTitle = document.createElement("h3");
    seasonsTitle.className = 'col-md-12 col-sm-12';
    const seasonsDiv = document.createElement("div");
     const container = document.querySelector(".container");
  
     seasonsDiv.className = "seasonsDiv";
     seasonsTitle.textContent = "Seasons(" + seasons.length + ")";
    // for (let i = 0; i < seasons.length; i++) {
        seasons.forEach(function (elem){
         const singleSeason = document.createElement("li");
        // singleSeason.textContent = seasons[i].premiereDate + " _ " + seasons[i].endDate;
        singleSeason.textContent = `${elem.premiereDate} _ ${elem.endDate}`;
        listOfSeasons.appendChild(singleSeason);
         seasonsDiv.appendChild(seasonsTitle);
         seasonsDiv.appendChild(listOfSeasons);
         container.appendChild(seasonsDiv);
        })
    //  };
  });





const requestCast = "http://api.tvmaze.com/shows/" + urlId + '/cast';

   fetch(requestCast, {
        method: "GET"
    }).then(function (result){//showCast
        console.log(result);
        return result.json();
        
        
   }).then(function (cast){
       console.log(cast);
        
   
     const castDiv = document.createElement("div");
     castDiv.className = "castDiv";
     const fullCast = document.createElement("ul");
     const castTitle = document.createElement("h3");
     castTitle.className = 'col-md-12 col-sm-12';
     castTitle.textContent = "Cast";
     for (let i = 0; i < 10; i++) {
        if(cast[i]){
         const actor = document.createElement("li");
         actor.textContent = cast[i].person.name;
         fullCast.appendChild(actor);
         castDiv.appendChild(castTitle);
        castDiv.appendChild(fullCast);
         const container = document.querySelector(".container");
       
        container.appendChild(castDiv);
        
        }
    }
  });




