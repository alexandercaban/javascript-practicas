'use strict'
var numerosArray = [];

function pedirnumero(mostrararray, ordenararreglo, invertirarreglo, longitudarreglo,buscarenarreglo){
	for(var i = 0; i<= 5; i++){
		var numero = parseInt(prompt("Digite un numero"));
		numerosArray.push(numero);
	}
	
	mostrararray(numerosArray);
	ordenararreglo(numerosArray);
	invertirarreglo(numerosArray);
	longitudarreglo(numerosArray);
	buscarenarreglo(numerosArray);

}

pedirnumero(
function(arreglo){
		document.write('<h2>Mostrar Arreglo</h2>');
		document.write('<ul>');
		for(var dato in arreglo){
			document.write('<li>'+ arreglo[dato]+'</li>');
		}
		document.write('</ul>');
		console.log(arreglo);
}, function(arreglo){
		var arrayordenado = arreglo.sort();
		document.write('<hr>');
		document.write('<h2>Ordenar Arreglo</h2>');
		document.write('<ul>');
		for(var dato in arrayordenado){
			document.write('<li>'+ arrayordenado[dato]+'</li>');
		}
		document.write('</ul>');
		console.log(arrayordenado);
}, function(arreglo){
		var arrayInvertido = arreglo.reverse();
		document.write('<hr>');
		document.write('<h2>Invertir Arreglo</h2>');
		document.write('<ul>');
		for(var dato in arrayInvertido){
			document.write('<li>'+ arrayInvertido[dato] +'</li>');
		}
		document.write('</ul>');
		console.log(arrayInvertido);
}, function(arreglo){
		var longitud = arreglo.length;
		document.write('<hr>');
		document.write('<h2>Longitud Arreglo</h2>');
		document.write('<p> La longitud del arreglo es: '+longitud+'</p>');
}, function(arreglo){
		var valorabuscar = prompt("introduzca un valor que crea que existe en el arreglo");
		var busquedaDato = arreglo.find(function(dato){
			return (dato == valorabuscar);
		});

		var busquedaIndice = arreglo.findIndex(dato  => dato == valorabuscar);
		document.write('<hr>');
		document.write('<h2>Busqueda en Arreglo</h2>');
		document.write('<p> Indice '+ busquedaIndice+' contenido '+ busquedaDato +'</p>');
		console.log('Indice '+ busquedaIndice+' contenido '+busquedaDato);


}



)