
const main = () => {
    const form  = document.getElementById('contactus');

    form.addEventListener('submit', (event) => {
        //Evita que el formulario se limpie con el submit
        event.preventDefault();
        let inputs = document.querySelectorAll('input');
        
        if (!verificar_vacio(inputs)) {
            presentar_info(inputs);
        }
    });
}

function limpiar_form(){
    document.getElementById('contactus').reset();
}

function verificar_vacio(input){
    var mensaje = "";
    var incompleto = false;
    for (var i = 0; i < 3; i++){
        if (input[i].value.trim() === "") {
            input[i].classList.add("vacio");
            mensaje += input[i].name + ", ";
            incompleto = true;
        }else{
            input[i].classList.remove("vacio");
        }     
    }

    if (document.querySelector('textarea').value.trim() === "") {
        document.querySelector('textarea').classList.add("vacio");
        mensaje += document.querySelector('textarea').name;
        incompleto = true;
    }else{
        document.querySelector('textarea').classList.remove("vacio");
    }

    if (incompleto) {
        alert("Todos los campos son obligatorios, Campos incompletos: " + mensaje);
    }

    return incompleto;
}

function presentar_info(input){
    console.log("Nombre: " + input[0].value);
    console.log("Correo: " + input[1].value);
    console.log("Asunto: " + input[2].value);
    console.log("Mensaje: " + document.querySelector('textarea').value); 
}