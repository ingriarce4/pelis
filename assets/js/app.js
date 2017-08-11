$(document).ready(function(){
 $(".button-collapse").sideNav();
 
 // validaciones
function validarNombre(){
var nombre = $('#nombre').val();
if(nombre==""){
alert(Debe ingresar un nombre);
 }else{
 	localStorage.setItem('name', nombre);
 }
}

function validarUsuario(){
var usuario = $('#user').val();
if(usuario==""){
alert(Debe ingresar un usuario);
 }else{
 	localStorage.setItem('user', usuario);
 }
}
function validarEmail(){
var email = $('#email').val();
if(email==""){
alert(Debe ingresar un email);
 }else{
 	localStorage.setItem('mail', email);
 }
}
function Contry(){
var contry = $('#contry').val();
if(contry==""){
alert(Debe ingresar un Country);
 }else{
 	localStorage.setItem('contry', contry);
 }
}

$.ajax({
	url: '/path/to/file',
	type: 'default GET (Other values: POST)',
	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
	data: {param1: 'value1'},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});

});

