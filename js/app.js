var limit = 20;
var offset = 20;
var theUrl = "https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset + "";

$.ajax({
  dataType : "json",
  url:  theUrl
}).done(getPokemon).fail(function( xhr, status) {
  console.log( "Error" );
})
// console.log(forms);
// $( this ).addClass( "done" );

function setPaginator(){
  $('.prev').click(function (){

  });

}

function getPokemon (data) {
  var obj = data
  var arr = data.results;
  // console.log(arr);
  // console.log(obj);

  $.each(arr, function(i,value){
      var infoPokemon = value;
      // console.log(infoPokemon);
      var namePokemon= infoPokemon.name;
      var urlPokemon = infoPokemon.url;
      // console.log(namePokemon);
      // console.log(urlPokemon);

      paintPokemon(namePokemon, urlPokemon);
  })


//posible funcion para paginator
  // $.each( obj, function( key, value ) {
  //   console.log( key + ": " + value );
  //   if ( key == 'previous' && value == null) {
  //     console.log(' ');
  //
  //   } else if(key == 'previous')  {
  //     console.log('< Anterior ' + value);
  //   }
  // });
}

function paintPokemon(namePokemon, urlPokemon) {

  var $row = $("<div />").addClass("row");
  var $namePokemon = $("<h5 />").addClass("center-align flow-text col s12 m4 l4");
  var $url = $("<a />").addClass("center-align flow-text col s12 m4 l4");
  var $image = $("<img />").addClass("col s12 m4 l4 center-align responsive-img");

  $url.prop("href",urlPokemon);
  $image.prop("src","https://dummyimage.com/200x200")
  $namePokemon.text(namePokemon);

  $row.append($namePokemon);
  $row.append($url);
  $row.append($image);

  $("#container_Pokemon").append($row);

}


$(document).ready(function(pokemon) {

});
