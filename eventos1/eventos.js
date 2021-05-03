// addEventListener vs on{evento}
// nodo.addEventListener();
// nodo.onClick / onCopy
/*
 - click: cuando el usuario realiza un click con el mouse
 - copy: cuando el usuario copia (control + c o desde el mouse)
 - cut: cuando el usuario corta (control + x o desde el mouse)
 - dblclick: cuando el usuario realiza doble click con el mouse
 - focus: cuando el usuario hace foco
 - keydown: cuando presiona una tecla
 - keyup: cuando suelta una tecla
 - mousedown: cuando el usuario presiona el click del mouse
 - mouseup: cuando el usuario suelta el click del mouse
 - mouseover: cuando el usuario ingresa al área del elemento con el mouse
 - paste: cuando el usuario pega un contenido (control + v o desde el mouse)
*/

// CLICK con addEventListener
let $clicBox = document.getElementById("clickBox");
$clicBox.addEventListener("click", () => {
    $clicBox.style.backgroundColor = "green";
})

// CLICK con onClick
let $clickBoxOn = document.getElementById("clickBoxOn");
$clickBoxOn.onclick = () => {
    $clickBoxOn.style.backgroundColor = "yellow";
}

// DOUBLE CLICK con addEventListener
let $dbclickBox = document.getElementById("dbclickBox");
$dbclickBox.addEventListener("dblclick", () => {
    //$dbclickBox.style.backgroundColor = "black";
    //asignar una regla de estilo del CSS
    $dbclickBox.classList.toggle("color");
})

// DOUBLE CLICK con onclick
let $dbclickBoxOn = document.getElementById("dbclickBoxOn");
$dbclickBoxOn.ondblclick = () => {
    $dbclickBoxOn.style.backgroundColor = "rgb(100,200,100)";
}

// remove Event Listener
let $createBoxBtn = document.getElementById("createBoxBtn");
let $stopBoxesBtn = document.getElementById("stopBoxesBtn");
let $boxCtn = document.getElementById("boxCtn");

$createBoxBtn.addEventListener("click", createBox);

$stopBoxesBtn.addEventListener("click", () => {
    $createBoxBtn.removeEventListener("click", createBox);
})

function createBox() {
    let $box = document.createElement("div");
    $box.classList.add("square");
    $boxCtn.appendChild($box);
}