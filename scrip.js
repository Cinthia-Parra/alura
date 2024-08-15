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