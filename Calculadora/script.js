// obtengo todos los input que necesito del html y los guardo en variables y constantes segun sea el caso
const btn = document.getElementById('botoncito');
var txt1 = document.getElementById('texto1');
var txt2 = document.getElementById('texto2');
var check1 = document.getElementById('check1');
var check2 = document.getElementById('check2');
var check3 = document.getElementById('check3');
var check4 = document.getElementById('check4');
const resultado = document.getElementById('resultado');

//declaro la variable resultado
var result;

//agrego el evento click al boton para que corra mi funcion
btn.addEventListener('click', Presionado);

//funcion que hace lo que yo le indique al presionar el boton
function Presionado(){
   if(check1.checked == true && check2.checked == false && check3.checked == false && check4.checked == false){
        result = parseInt(txt1.value) + parseInt(txt2.value);
        //agregar contenido en el html desde JS
        let HTMLString = "<h1>El resultado de la suma es: </h1>" + result;
        resultado.innerHTML = HTMLString;
    }
   else if(check1.checked == false && check2.checked == true && check3.checked == false && check4.checked == false){
    result = parseInt(txt1.value) - parseInt(txt2.value);
        //agregar contenido en el html desde JS
        let HTMLString = "<h1>El resultado de la resta es: </h1>" + result;
        resultado.innerHTML = HTMLString;
    }   
    else if(check1.checked == false && check2.checked == false && check3.checked == true && check4.checked == false){
        result = parseInt(txt1.value) * parseInt(txt2.value);
        //agregar contenido en el html desde JS
        let HTMLString = "<h1>El resultado de la multiplicacion es: </h1>" + result;
        resultado.innerHTML = HTMLString;
    }
    else if(check1.checked == false && check2.checked == false && check3.checked == false && check4.checked == true){
        result = parseInt(txt1.value) / parseInt(txt2.value);
        //agregar contenido en el html desde JS
        let HTMLString = "<h1>El resultado de la division es: </h1>" + result;
        resultado.innerHTML = HTMLString;
        if (parseInt(txt2.value) == 0){
            alert("No se puede dividir por cero");
        }
    }else{
        // si no selecciona ninguna casilla o selecciona mas de una salta el siguiente alert
        alert("Selecciona una operacion");
    }
}