urlPokemones = [];

function iniciar(){
	funcionCargar(true);
	pedirDatos("https://pokeapi.co/api/v2/pokemon/",agregarURLs,funcionError);	
}

function agregarURLs(data){
	//console.log("agregar todas las URLs:");
	datos = data.results;  
	for (i = 0; i < datos.length; i++) {
		urlPokemones = urlPokemones.concat(datos[i].url);
	}
	obtenerTodosLosDatosDePokemones();
}

function obtenerTodosLosDatosDePokemones(){
	funcionCargar(false);
	for (i = 0; i < urlPokemones.length; i++) {
		pedirDatos(urlPokemones[i],agregarCampoPokemon,funcionError);
	}
}

function funcionError(err){
	console.log(err)
}

$('#campoBuscarPokemon').on('input',function(e){
	funcionBuscarPokemon();
});

function funcionBuscarPokemon(){
	nombrePokemon = document.getElementById('campoBuscarPokemon').value
	var pokemonesSizas = Enumerable.From(Pokemones)
	.Where(function (x) { 
		var cad = x.name.toLowerCase();
		var estado = cad.startsWith(nombrePokemon.toLowerCase());
		//console.log(cad + "  " + estado);
		return estado;})
	.ToArray();

	AreaPokemons.innerHTML = "";

	for(i = 0 ; i < pokemonesSizas.length ; i++){
		renderPokemones(pokemonesSizas[i]);
	}
}

function funcionCargar(estado){
	if(estado){
		AreaPokemons.innerHTML = "";
		var imagen = document.createElement("img");
		imagen.setAttribute("class","imagenCargando");
		imagen.src = "./Imagenes/cargando.gif";
		AreaPokemons.appendChild(imagen);
	}else{
		AreaPokemons.innerHTML = "";
	}
}

