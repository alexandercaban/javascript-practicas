'use strict'

if (typeof(Storage) !== 'undefined'){
	console.log('poseemos el localstorage');
}else{

	console.log(' no poseemos el localstorage');
}


localStorage.setItem("nombre", "Alexander");