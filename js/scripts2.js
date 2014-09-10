/*// Definimos variable global

var variableGlobal = 10;

*/
// Creamos una función
miFuncion = function(par, pare){
	
	var variableLocal = 20;
	var suma = variableGlobal + variableLocal + par;
	var resultado = pare + suma;

	document.write(resultado + "<br/>");
	
	console.log("variableGlobal" + " + " + "variableLocal");
};

/*miFuncion(10, "La suma de las variables es igual a: "); */



//Creamos una función de operacion de matemáticas (suma)
funcionSuma = function(){
	var numUno = 5;
	var numDos = 10;
	var numTres = 15;
	var suma = numUno + numDos + numTres;
	document.write("Función suma");
	console.log(suma);
	alert("Función de suma");
};

// funcionSuma(); 

//Creamos una función de operación de matemáticas (resta)
funcionResta = function() {
	var numUno = 10;
	var numDos = 7;
	var resta = numUno - numDos;
	document.write("Funcion resta " + resta);
	console.log(resta);
	alert("Función de resta");
};

//funcionResta();


//Creamos una función de formulario de usuario
formUsuario = function(){
	var nombre = prompt("Introduzca su nombre");
	var apellido = prompt("Introduzca su apellido");
	var edad = prompt("Introduzca su edad");
	document.write("Datos de Usuario")
	console.log("Formulario de usuario " + nombre);
};

//formUsuario();

//Creamos una funcion de variable booleana
funcionBooleana = function(){
	var variable = parseInt(prompt("Introduzca un número"));
	var resultado = variable <= 40;
	document.write("Funcion variable booleana")
	console.log("Limitado el acceso a: " + resultado);
	alert("Acceso limitado")
};

//funcionBooleana();

//Creamos una segunda función de variable booleana
funcionBool = function(){
	var cantidad = parseInt(prompt("Introduzca cantidad"));
	var resultado = cantidad >= 200;
	document.write("Ingreso mínimo");
	console.log("Ingreso mínimo en la cuenta: " + resultado);
};

funcionBool();

//Creamos una función de variable arrays
funcionArrays = function() {
	var semana = ["lunes", "martes", "miércoles", "jueves", "sábado", "domingo"];
	var valores = [0,1,2,3,4,5,6];
	var variable = prompt("Introduzca un día de la semana");
	
	document.write("Función variable Arrays");
	console.log("semana[0]" + "semana[1]" + "semana[2]" + "semana[3]" + "semana[4]" + variable);
	alert("Días de la semana " + valores);
};

//funcionArrays();


//Creamos otra funcion de Arrays
funcionArr = function() {
	var cursos = ["Danza", "Informática", "Inglés", "Pintura"];
	var valores = [0,1,2,3];
	var variable = prompt("Introduzca curso elegido");
	document.write("Cursos temporada 2014/2015");
	console.log("Curso = " + variable)
};
//funcionArr();


//Creamos una función para el cuerpo del documento

funcionTexto = function() {
	document.write("<h1>Para probar el cuerpo del texto</h1>");
	console.log("Cuerpo del texto");
};
//funcionTexto();



