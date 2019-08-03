var AreaPokemons = document.getElementById('AreaContenido');
var urlImgPokebola = "Imagenes/noDisponible.png";
var Pokemones = []
var cargandoInicial = true;

function agregarCampoPokemon(Pokemon){

	Pokemones.push(Pokemon);
	renderPokemones(Pokemon);
	if(cargandoInicial){
		funcionCargar(false);
		cargandoInicial = false;
	}
}


function renderPokemones(Pokemon){

	var nombrePokemon = Pokemon.name;
	var urlImagenFrontal = Pokemon.sprites.front_default;
	var urlImagenTrasera = Pokemon.sprites.back_default;
	var pesoPokemon = "Peso: "+Pokemon.weight + "kg";
	var alturaPokemon = "Altura: "+Pokemon.height + "cm";
	var IdPokemon = "Id: "+Pokemon.id;
	var clasePokemon = "Clase:" + Pokemon.type;

	var contenedorTodo = crearElementoYClase("div","contenedorTodo");
	var contenedorImagen = crearElementoYClase("div","contenedorImagen");

	agregarElementoTexto("contenedorNombre",capitalizeFirstLetter(nombrePokemon),contenedorTodo);
	agregarElementoImagen("imagen",urlImagenFrontal,urlImgPokebola,contenedorImagen);

	contenedorTodo.appendChild(contenedorImagen);
	AreaPokemons.appendChild(contenedorTodo);
}

function crearElementoYClase(tipo,clase){
	var elemento = document.createElement(tipo);
	elemento.setAttribute("class",clase);
	return elemento;
}

function agregarElementoTexto(clase,texto,padre){
	var elemento = crearElementoYClase("div",clase);
	elemento.innerHTML = texto;
	padre.appendChild(elemento);
}



function agregarElementoImagen(clase,link,padre){
	var imagen = crearElementoYClase("img",clase);
	imagen.setAttribute("class",clase);
	imagen.src = link;
	padre.appendChild(imagen);

}

function agregarElementoImagen(clase,link,linkAlt,padre){
	var imagen = crearElementoYClase("img",clase);
	imagen.setAttribute("class",clase);
	if(link != null){
		imagen.src = link;
	}else{
		imagen.src = linkAlt;	
	}

	padre.appendChild(imagen);
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}