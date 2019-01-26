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
    $("#display-gifs").empty();
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
    //Add function for adding gifs by clicking buttons
    var imageUrl = results[i].images.fixed_height.url;
    var bandImage = $("<img>");
        
    bandImage.attr("src", imageUrl);
    bandImage.attr("atl", "band image");
    //add src for animated and still
    $("#display-gifs").prepend(bandImage);
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

  //Buttons render gifs
  $(document).on("click", ".bands-button", renderGifs);

  renderButtons();


});
