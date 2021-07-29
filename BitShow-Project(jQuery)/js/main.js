$(function () {


    var request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET"

    })

    request.done(function (showMe) {
        console.log(showMe);
        var res = $.parseJSON(request.responseText);


        for (var i = 0; i < 50; i++) {
            var image = $("<img>");
            $(image).attr("src", res[i].image.medium);
            var link = $("<a></a>");
            link.attr("href", 'showInfo.html?id=' + res[i].id);
            link.text(res[i].name);

            var singleMovie = $("<div></div>");
            singleMovie.append(image);
            singleMovie.append(link);
            singleMovie.addClass("singleMovie");

            var mainDiv = $("#container");
            mainDiv.append(singleMovie);

        };


    })

    var input = $("input").html("");
    $(input).on("keydown", function () {
        var inputSearch = $("input").val();
        $("ul").html("");
        $("ul").addClass("activeUl");

        var requestSingleSearch = $.ajax({
            url: "http://api.tvmaze.com/search/shows?q=" + inputSearch,
            method: "GET"

        })

        requestSingleSearch.done(function () {
            var result = $.parseJSON(requestSingleSearch.responseText);

            var list = $("ul");
            for (var j = 0; j < result.length; j++) {
                var singleShow = $("<a></a>");
                singleShow.text(result[j].show.name);
                singleShow.attr("href", 'showInfo.html?id=' + result[j].show.id);
                var listItem = $("<li></li>");
                listItem.append(singleShow);
                list.append(listItem);

            };
        })

    });






});



