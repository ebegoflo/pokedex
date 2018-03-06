var limit = 20;
var offset = 20;
var theUrl = "https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset + "";

$.ajax({
  dataType : "json",
  url:  theUrl
}).done(getPokemon).fail(function (status) {
  console.log("error");
})


function modalInfo(){
  $('#modal').click(function (namePokemon){
    $.ajax({
      dataType : "json",
      url:  `https://pokeapi.co/api/v2/pokemon/pokemon${namePokemon}`
    }).done(function(data){
      console.log(data)
    })
  });

}


function pokemonDetail (namePokemon) {
    $.ajax({
      dataType : "json",
      url:  `https://pokeapi.co/api/v2/pokemon-form/${namePokemon}`
    }).done(function(data){
      console.log(data.name);
      console.log(data.sprites.front_default);
      $('.img-pokemon-' + data.name).attr('src', data.sprites.front_default);
    })
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

      // pokemonDetail (namePokemon);
      paintPokemon(namePokemon);
      pokemonDetail (namePokemon)
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

function paintPokemon(namePokemon,urlPokemon) {

  let templete = `<div class="panel panel-default col-md-3">
  <div class="panel-heading text-center">
  <img class="responsive-img img-rounded img-pokemon-${namePokemon}" src="${urlPokemon}" alt="${namePokemon}">
  </div>
  <div class="panel-body">
  <h3 class="panel-title">${namePokemon}</h3>
  <a id="modal" href="${urlPokemon}">Conoce más</a>
  </div>
  </div>`

  const pokemonContainer = document.getElementById('container_Pokemon')
  pokemonContainer.innerHTML += templete;

  // var $row = $("<div />").addClass("row");
  // var $namePokemon = $("<h5 />").addClass("center-align flow-text col s12 m3 l3");
  // var $url = $("<a />").addClass("center-align flow-text col s12 m3 l3");
  // var $image = $("<img />").addClass("col s12 m3 l3 center-align responsive-img");
  //
  // $url.prop("href",urlPokemon).text("Conoce más");
  // $image.prop("src","https://dummyimage.com/200x200")
  // $namePokemon.text(namePokemon);
  //
  // $row.append($namePokemon);
  // $row.append($url);
  // $row.append($image);
  //
  // $("#container_Pokemon").append($row);

}


$(document).ready(function(pokemon) {

});
