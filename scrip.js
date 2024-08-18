const texArea = document.querySelector("#text_encriptar");
const mensaje = document.querySelector("#text_no_encriptado");

function btnEncriptar() {
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value = textoEncriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desEncriptar(stringDesEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesEncriptado = stringDesEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesEncriptado.includes(matrizCodigo[i][1])) {
            stringDesEncriptado = stringDesEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesEncriptado;
}

function btnDesEncriptar() {
    const textoDesEncriptado = desEncriptar(texArea.value);
    mensaje.value = textoDesEncriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function btnCopiar() {
    let texto = mensaje;
    let range = document.createRange();
        range.selectNodeContents(texto);
    let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        navigator.clipboard.writeText(mensaje.value)
            .then(() => {
                alert("Texto copiado: " + texto.value);
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
}


document.getElementById('text_encriptar').addEventListener('input', function(event) {
        const textarea = event.target;
        const regex = /[A-ZÁÉÍÓÚÜÑáéíóúüñ1234567890@#$%&*+\-/=]/;
        if (regex.test(textarea.value)) {
            alert("favor de solo esribir munusculas, no numeros, letras con acentos ni caracteres especiales");
        }
    });


/*responsive*/
