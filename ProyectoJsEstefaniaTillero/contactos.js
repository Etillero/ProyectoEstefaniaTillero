//section contact//




const formulario = document.getElementById("form");



formulario.addEventListener("submit",function(e){

    e.preventDefault();


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");

console.log(nombre.value);
console.log(apellido.value);
console.log(email.value);
console.log(asunto.value);
console.log(mensaje.value);

console.log("registrando datos al sistema");

})





let enviar = document.getElementById("enviar");

console.log(enviar);

let Borrar = document.getElementById("Borrar");

console.log(Borrar);


let registroGlobal = "";
let MensajeGlobal = "";

function registro(){

    let registro = document.getElementById("registro");
    let mensaji = document.getElementById("mensaji");
    let mensajito = document.getElementById("mensajito");

    if (registro == registroGlobal && mensaji == MensajeGlobal) {
        console.log("Usuario correctamente registrado");
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Te registraste correctamente!";
        mensajito.appendChild(parrafo);
        
    }

    else{
        console.log("ups");


    }
}


/*jquerys con animaciones y efectos*/

$(document).ready(function() {
    $("#fadeOut").click(function() {
        $("#caja").fadeOut(4000);
        $("#fadeOut").text("hasta la vista Padawan")
        
    })
    
})

$(document).ready(function() {
    $("#fadeId").click(function() {
        $("#caja").fadeOut();
        $("#fadeId").text("Hello luke!")
        
    })

    $("#slideDown").click(function() {
        $("#caja").slideDown(2000);
    }) 

     $("#slideUp").click(function() {
            $("#caja").slideUp(2000);
        })
        
})





 


