$(document).ready(function() {

//Some starter bands array
var bands = ["Guitar", "Drums", "Bass Guitar", "Microphone"];
  
//Make gifs show up
function renderGifs() {

  //Giphy query url
  var instrument = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + instrument + "&api_key=WrV5rnOz4iJHVQjfvzOTyxiOIoLecRKA&limit=10";
  
  
  //Ajax
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
  
    //Looping through the data
    var results = response.data;
    for (var i = 0; i < results.length; i++) {

    //Adding the rating because I forgot  
    var gifsnRating = $("<div>"); 
    var rating = results[i].rating;
    gifsnRating.addClass("gifs-rating");
    var p =$("<p>").text("Rating: " + rating);
    gifsnRating.append(bandImage);
    gifsnRating.prepend(p);
    
    var bandImage = $("<img>");
    
    //bandImage object
    bandImage.attr({
      "src": results[i].images.fixed_height.url,
      "data-still": results[i].images.fixed_height_still.url,
      "data-animate": results[i].images.fixed_height.url,
      "alt": "band image"
    })

    $("#display-gifs").prepend(gifsnRating);
    }
  
  }); 
}

  //Buttons
  function renderButtons() {
    $("#buttons-view").empty();
    for(var i = 0; i < bands.length; i++) {
      var a = $("<button>");
      a.addClass("bands-button");
      a.attr("data-name", bands[i]);
      a.text(bands[i]);
      $("#buttons-view").append(a);
    }
  }

  //Add new band button
  $("#add-band").on("click", function(event) {
    event.preventDefault();

    var rockBand = $("#band-input").val().trim();
    bands.push(rockBand);

    renderButtons();
  });

  //Click buttons to get gifs
  $(document).on("click", ".bands-button", renderGifs);

  //Make sure the buttons show up
  renderButtons();

  //Play or Pause Gifs
  $(document).on("click", "img", function(){
    var current = $(this).attr("data-state");
    if (current === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    } else {
        $(this).attr("src", $(this).attr("data-animate")); 
        $(this).attr("data-state", "animate");
    }
  });


});
