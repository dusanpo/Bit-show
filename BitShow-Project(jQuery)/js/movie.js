$(function () {



    var a = window.location.search;

    var urlId = (function index() {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === "=") {
                return a.slice(i + 1);
            }
        }
    })();
    console.log(urlId);




    var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + urlId,
        method: "GET"
    })

    request.done(function () {

        var response = $.parseJSON(request.responseText);
        //console.log(response);
        var title = $("<h1></h1>");
        title.text(response.name);
        var container = $(".container");
        container.append(title);
        var image = $("<img class='col-lg-6 col-md-6 col-sm-12'>");
       
        image.attr("src", response.image.original);

        var showDetailsTitle = $("<h3></h3>");
        showDetailsTitle.text("Show Details");
        showDetailsTitle.addClass("details");

        var details = $("<div class='col-md-12 col-sm-12' ></div>");
        details.html(response.summary);
        console.log(details);

        var imageDiv = $("<div></div>");
        imageDiv.append(image);
        imageDiv.append(showDetailsTitle);
        imageDiv.append(details);
        container.append(imageDiv);

    })




    var request1 = $.ajax({
        url: "http://api.tvmaze.com/shows/" + urlId + '/seasons',
        method: "GET"
    })

    request1.done(function () {
        var seasons = $.parseJSON(request1.responseText);
        //console.log(seasons);

        var listOfSeasons = $("<ul></ul>")
        var seasonsTitle = $("<h3></h3>");
        var seasonsDiv = $("<div class='col-md-6 col-sm-12'></div>");
        var container = $(".container");

        seasonsDiv.addClass("seasonsDiv");
        seasonsTitle.text("Seasons(" + seasons.length + ")");

        for (var i = 0; i < seasons.length; i++) {
            var singleSeason = $("<li></li>");
            singleSeason.text(seasons[i].premiereDate + " - " + seasons[i].endDate);
            listOfSeasons.append(singleSeason);
            seasonsDiv.append(seasonsTitle);
            seasonsDiv.append(listOfSeasons);
            container.append(seasonsDiv);
        };
    })



    var request2 = $.ajax({
        url: "http://api.tvmaze.com/shows/" + urlId + '/cast',
        method: "GET"
    })

    request2.done(function () {
        var cast = $.parseJSON(request2.responseText);
        //console.log(cast);
        var castDiv = $("<div class='col-lg-6 col-md-6 col-sm-12'></div>")
        castDiv.addClass("castDiv");
        var fullCast = $("<ul></ul>");
        var castTitle = $("<h3></h3>");
        castTitle.text("Cast");

        for (var i = 0; i < 10; i++) {
            if(cast[i]){
                var actor = $("<li></li>");
                actor.text(cast[i].person.name);
                //console.log(cast[i]);
                
                fullCast.append(actor);
                castDiv.append(castTitle);
                castDiv.append(fullCast);
                var container = $(".container");
                container.append(castDiv);
            }
       
        }
    })


});