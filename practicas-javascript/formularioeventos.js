
window.addEventListener('load', function(){
		var formulario = document.querySelector("#miformulario");
		var nombre = document.querySelector("#nombre");
			var apellido = document.querySelector("#apellido");
			var edad = document.querySelector("#edad");

		formulario.addEventListener('submit', function(){
			


			var cajadetexto = document.querySelector("#inf");
			var parrafo = document.createElement('p');
			parrafo.appendChild(document.createTextNode(nombre.value +" "+apellido.value+" "+edad.value ));

			cajadetexto.appendChild(parrafo);
			cajadetexto.appendChild(document.createElement('hr'));
			cajadetexto.style.background='#ccc';
			cajadetexto.style.border='white 5px dotted';


			var boton = document.querySelector("#boton");
			boton.style.background = 'blue';


				
		});

		nombre.addEventListener('focus', function(){
			console.log('Foco en el campo');
		});

		nombre.addEventListener('blur', function(){
			console.log('Perdió foco del Texto');
		});

		nombre.addEventListener('keydown', function(){
			console.log('keydown');
		});

		nombre.addEventListener('keypress', function(){
			console.log('keypress');
		});

		nombre.addEventListener('keyup', function(){
			console.log('keyup');
		});
});
