
function cifrar(){
var mensaje = document.getElementById("mensaje").value;
var password = document.getElementById("pass").value;
var cifrado = CryptoJS.AES.encrypt(mensaje, password);
document.getElementById("demo01").innerHTML = cifrado;
}
var cifrado = CryptoJS.AES.encrypt(mensaje, password);

function descifrar(){
var cifrado2 = document.getElementById("mensaje2").value;
var password2 = document.getElementById("pass2").value;
var descifrado = CryptoJS.AES.decrypt(cifrado2, password2);
document.getElementById("demo02").innerHTML = descifrado;
document.getElementById("demo03").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
}



function generatePDF(){
        const texto = document.getElementById('demo01');

        html2pdf()
        .from(texto)
        .save();



    }





