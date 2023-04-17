/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

var encriptar = document.getElementById("encriptar"),
    desencriptar = document.getElementById("desencriptar");



function encriptarTexto() {
    let text = document.getElementById("idEncriptar");

    let newText = allReplace( text, { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' } );

    document.getElementById("msgEncriptado").innerHTML=newText;
    
  }

function desencriptarTexto() {
    let text = document.getElementById("idEncriptar");

    let newText = allReplace( text, { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' } )
    
}

encriptar.addEventListener('click',encriptarTexto,true);
desencriptar.addEventListener('click',desencriptarTexto,true);



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