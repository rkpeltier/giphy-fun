
//Giphy query url
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=WrV5rnOz4iJHVQjfvzOTyxiOIoLecRKA&limit=5";

//Ajax
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    
  }); 

  //Buttons

  //Search + button

  //start and stop gifs