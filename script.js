const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = () => {
    //inicio la variabble random y llamo la funcion math.random lo converto a cadenas de 16 caracteres
    //y lo acorto desde el segundo valor al 8
    const ramdomColor   = color = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + ramdomColor;
    hex.innerHTML = "#" + ramdomColor;

}

btn.addEventListener("click", generateColor);

generateColor();

// let color = Math.random();
// color = Math.random().toString(16);
// color = Math.random().toString(16).substring(2, 8);


//console.log(color);