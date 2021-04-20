
// acceder a un elemento con el ID
let nombre = document.getElementById("Buffalo");

// acceder a elementos por el tag (nombre de etiqueta)
let titulos = document.getElementsByTagName("h2");

// acceder a elementos por su clase
let tiposCocina = document.getElementsByClassName("tipo");


nombre.textContent = "Pizza Hut";
nombre.style.color = "red";

for (var i = 0; i < titulos.length; i++) {
    titulos[i].style.textDecoration = 'underline';
    titulos[i].style.fontSize = "32px";
    titulos[i].style.background = "white";
}

let present = document.getElementById("presentacion");
console.log(present.outerHTML);

present.innerHTML = '<section id="presentacion"><h2 id="Buffalo" style="color: red; text-decoration: underline; font-size: 32px; background: white;">Pizza Hut</h2> <h3> Historia</h3></section>';

/*
Propiedades:
============
- element.attributes   contiene un array de atributos
- element.className    devuelve o establece el valor del atributo class
- element.classList    devuelve un array con atributos de la clase del elemento
- element.firstElementChild devuelve el siguiente elemento
- elment.innerHTML     devuelve o establece la sintaxis HTML
- element.id           devuelve o establece el valor del atributo id
- element.lastElementChild devuelve el último elemento
- element.name         devuelve o establece el atributo del nombre, para los tags que tengan atrin name
*/

/* crear elementos HTML desde JS*/

let padre = document.getElementById("tipica");
let hijo = document.createElement("p");
hijo.textContent = "Bandeja Paisa";
padre.appendChild(hijo);


