$(document).ready(function() {

//Some starter bands array
var bands = ["The Beatles", "Blondie", "Queen", "The Doors"];
  
//Make gifs show up
function renderGifs() {

  //Giphy query url
  var queryURL = "https://api.giphy.com/v1/gifs/search?=" + band + "api_key=WrV5rnOz4iJHVQjfvzOTyxiOIoLecRKA&limit=10";
  
  //Ajax
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#display-gifs").empty();
    
    //Add function for adding gifs by clicking buttons
    var imageUrl = response.data.image_original_url;
    var bandImage = $("<img>");
    
    bandImage.attr("src", imageUrl);
    bandImage.attr("atl", "band image");
  
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
    var band = $("#band-input").val().trim();
    bands.push(band);
    renderButtons();

  });

  renderButtons();
  renderGifs();

});
