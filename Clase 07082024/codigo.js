console.log("Hola Mundo: Ale, Alonso, Hugo, Isaac, Jared, Jose Luis, Rafael y Sergio");

// let peso = 70;
// let altura = 1.70;

function calculaIMC(peso, altura) {

    if(altura <= 0) {
        throw new Error("La altura debe ser mayor que cero.");
    }

    let imc = peso/(altura*altura)
    return imc.toFixed(2);
}

// let imc = calculaIMC(peso,altura);
// console.log("Tú IMC es igual a: " + imc);

document.getElementById('formularioIMC').addEventListener('submit',function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    try {
        const imc = calculaIMC(peso,altura);
        document.getElementById('resultado').textContent = "El IMC es: "+ imc;
    }catch (error) {
        document.getElementById('resultado').textContent = error.message;
    }
});