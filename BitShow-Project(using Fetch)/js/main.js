

const request = "http://api.tvmaze.com/shows";

fetch(request, {
    method: "GET"
}).then(function (showMe) {
    console.log(showMe);
    return showMe.json();

}).then(function (res) {
    console.log(res);

    for (let i = 0; i < 50; i++) {
        const image = document.createElement("img");
        image.setAttribute("src", res[i].image.medium);
        const link = document.createElement("a");
        link.setAttribute("href", 'showInfo.html?id=' + res[i].id);
        link.textContent = res[i].name;
        const singleMovie = document.createElement("div");
        singleMovie.appendChild(image);
        singleMovie.appendChild(link);
        singleMovie.className = "singleMovie";
        const mainDiv = document.querySelector("#container");
        mainDiv.appendChild(singleMovie);


    };


});



const input = document.querySelector("input");
input.innerHTML = "";


input.addEventListener("keydown", function () {
    const inputSearch = document.querySelector("input").value;

    document.querySelector("ul").innerHTML = "";
    document.querySelector("ul").classList.add("activeUl");



    const requestSingleSearch = "http://api.tvmaze.com/search/shows?q=" + inputSearch;


    fetch(requestSingleSearch, {
        method: "GET"
    }).then(function (singleSearch) {
        console.log(singleSearch);

        return singleSearch.json();
    }).then(function (result) {

        console.log(result);


        const list = document.querySelector("ul");
        
            result.forEach(function (element){
                
            
            const singleShow = document.createElement("a");
            singleShow.textContent = element.show.name;
            singleShow.setAttribute("href", 'showInfo.html?id=' + element.show.id);
             const listItem = document.createElement("li");
             listItem.appendChild(singleShow);
            list.appendChild(listItem);
            })

        
    })

});










