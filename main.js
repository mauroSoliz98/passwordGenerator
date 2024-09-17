let cantidadValores = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasenna = document.getElementById('contrasena');
const candenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

const Generar = () => {
    let nuemeroDigitado = parseInt(cantidadValores.value)
    let password = ''
    console.log(nuemeroDigitado);
    
    if( nuemeroDigitado < 8 ) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        contrasenna=''
    }
    for( let i=0; i < nuemeroDigitado; i++ ){
        let caracterAleatorio = candenaCaracteres[Math.floor(Math.random() * candenaCaracteres.length)];
        password+=caracterAleatorio;
    }
    contrasenna.value = password;   
}
const Limpiar = () => {
    contrasenna.value = ''
    cantidadValores.value = ''
}
