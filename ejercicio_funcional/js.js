// Constantes para que la maquina cree un numero aleatorio de 4 digitos
const numeroGenerado = Math.floor(Math.random() * 9000) + 1000;
const numeroAleatorio = String(numeroGenerado).split('').map(Number);

// Se llaman los botones por su id
const numero1 = document.getElementById("boton1");
const numero2 = document.getElementById("boton2");
const numero3 = document.getElementById("boton3");
const numero4 = document.getElementById("boton4");

let contadorFijas = document.getElementById("contadorFijas");
let contadorPicas = document.getElementById("contadorPicas");
const formulario = document.getElementById("comprobacion");

//sintaxis para que el foco se mueva automaticamente al siguiente al estar lleno
document.getElementById("boton1").addEventListener("input", () => {
    document.getElementById("boton2").focus();
});

document.getElementById("boton2").addEventListener("input", () => {
    document.getElementById("boton3").focus();
});

document.getElementById("boton3").addEventListener("input", () => {
    document.getElementById("boton4").focus();
});

// Función para comprobar el número ingresado por el usuario
function comprobarFijasPicas(e) {
    e.preventDefault();

    // Se crea un arreglo con los valores de los numeros que el usurio ingreso
    const usuarioIntento = [
        Number(numero1.value),
        Number(numero2.value),
        Number(numero3.value),
        Number(numero4.value)
    ];
// las variables se inician vacias
    let fijas = 0;
    let picas = 0;

    // Comprobar cuántas fijas y cuántas picas
    usuarioIntento.forEach((num, index) => {
        if (num === numeroAleatorio[index]) {
            fijas++; // Si el número y la posición son correctos, es una "fija"
        } else if (numeroAleatorio.includes(num)) {
            picas++; // Si el número es correcto pero no en la pocicion es una "pica"
        }
    });

    // Actualizar los contadores de fijas y picas en el DOM
    contadorFijas.textContent = fijas;
    contadorPicas.textContent = picas;

    // Verificar si el usuario adivinó todos los números
    if (fijas === 4) {
        alert(`¡Felicidades! Has adivinado el número correctamente: ${numeroGenerado}`);
    }
}

// Agregar el evento al formulario para que cuando el usuario presione "Probar", se ejecute la función
formulario.addEventListener('submit', comprobarFijasPicas);
