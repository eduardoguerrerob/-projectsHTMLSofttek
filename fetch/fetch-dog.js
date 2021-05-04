// API dog.ceo/dog-api
// el comando para llamar a una API es fetch
// fetch recibe como parámetro un endpoint, que es una url

function getDogImg(url) {
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            console.log(json.message);
            // mostrar la imagen
            let $contenedor = document.getElementById("contenedor");
            let $img = document.createElement("img");
            $img.setAttribute("src", json.message);
            $contenedor.appendChild($img);

        })
        .catch((error) => console.log(error));
}


let endPoint = "https://dog.ceo/api/breeds/image/random";
getDogImg(endPoint);