// obtengo todos los input que necesito del html y los guardo en variables y constantes segun sea el caso
const btn = document.getElementById('boton1');
var txt1 = document.getElementById('base');
var txt2 = document.getElementById('altura');
const resultado = document.getElementById('resultado');

//declaro la variable resultado
var result;

//agrego el evento click al boton para que corra mi funcion
btn.addEventListener('click', Presionado);

//funcion que hace lo que yo le indique al presionar el boton
function Presionado(){
        result = parseInt(txt1.value) * parseInt(txt2.value) / 2;
        resultado.innerHTML = result;
   }