$(document).ready(function() {
  $("#favorite-things form").submit(function(event) {
    var foodInput = $("input#food").val();
    var animalInput = $("input#animal").val();
    var bandInput = $("input#band").val();
    var sportInput = $("input#sport").val();
    var movieInput = $("input#movie").val();

    var favThings1 = [foodInput, animalInput, bandInput, sportInput, movieInput];
    var favThings2 = favThings1.slice(1, -3)
    var result = favThings2.push(foodInput, bandInput, sportInput, movieInput)

    $(".food").text(foodInput);
    $(".animal").text(animalInput);
    $(".band").text(bandInput);
    $(".sport").text(sportInput);
    $(".movie").text(movieInput);

    $("#results").show();
    event.preventDefault();
    
  });
});
