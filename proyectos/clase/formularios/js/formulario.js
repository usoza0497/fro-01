const botonSubmit = document.getElementById('btn-registrar');


const imprimirDatos = () => {

    let nombre = document.getElementById('txt-nombre').value;
    let apellido = document.getElementById('txt-apellido').value;
    let email = document.getElementById('email').value;
    let direccion = document.getElementById('txt-direccion').value;
    let ciudad = document.getElementById('txt-ciudad').value;
    let provincia = document.getElementById('slt-provincia').value;
    let zip = document.getElementById('txt-zip').value;

    console.log('El nombre es: ', nombre, apellido); 
    console.log('El correo es: ', email);
    console.log('La direccion es: ', direccion);
    console.log('La ciudad es: ', ciudad);
    console.log('La provincia es: ',provincia);
    console.log('El zip es: ', zip);

};


botonSubmit.addEventListener('click', imprimirDatos);