/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

var encriptar = document.getElementById("encriptar"),
    desencriptar = document.getElementById("desencriptar"),
    copiar = document.getElementById("copiar");



function encriptarTexto() {
    var text = document.getElementById("ingresartexto").value;
    text = text.replace(/[e]/g, "enter");
    text = text.replace(/[i]/g, "imes");
    text = text.replace(/[a]/g, "ai");
    text = text.replace(/[o]/g, "ober");
    text = text.replace(/[u]/g, "ufat");
  
    document.getElementById("msgEncriptado").innerHTML = text.toString();
    document.getElementById("ingresartexto").value="";
    document.getElementById("idEncriptar").style.display="none";
    document.getElementById("muñeco").style.display="none";
    document.getElementById("copiar").style.display="flex";
    document.getElementById("labelcopiar").textContent="Copiar";
    
    }

function desencriptarTexto() {
    var text = document.getElementById("ingresartexto").value;
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");

    document.getElementById("msgEncriptado").innerHTML = text.toString();
    document.getElementById("ingresartexto").value="";
    document.getElementById("labelcopiar").textContent="Copiar";
    
    }
  
function copiarTexto(){
  var textCopy = document.getElementById("msgEncriptado").value;
  navigator.clipboard.writeText(textCopy);
  document.getElementById("labelcopiar").textContent="¡Copiado!";

}

encriptar.addEventListener('click',encriptarTexto,true);
desencriptar.addEventListener('click',desencriptarTexto,true);
copiar.addEventListener('click',copiarTexto,true);



/*
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);
    switch (letra) {
        case "a":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          break;
        case "e":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          break;
        case "i":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
          break;
        case "o":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
          break;
        case "u":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
  }

  */