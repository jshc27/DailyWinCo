
let data = [

    
"00 Disponible","01 Disponible","02 Disponible", "03 Disponible","04 Disponible","05 Disponible",
    "06 Disponible","07 Disponible","08 Disponible","09 Disponible","10 Disponible","11 Disponible",
    "12 Disponible","13 Disponible","14 Disponible","15 Disponible","16 Disponible","17 Disponible",
    "18 Disponible","19 Disponible","20 Disponible","21 Disponible","22 Disponible","23 Disponible",
    "24 Disponible","25 Disponible","26 Disponible","27 Comprado","28 Disponible","29 Disponible",
    "30 Disponible","31 Disponible","32 Disponible","33 Disponible","34 Disponible","35 Disponible",
    "36 Comprado","37 Disponible","38 Disponible","39 Disponible","40 Disponible","41 Disponible",
    "42 Disponible","43 Disponible","44 Disponible","45 Disponible","46 Disponible",
    "47 Disponible","48 Disponible","49 Disponible","50 Disponible","51 Disponible","52 Disponible",
    "53 Disponible","54 Disponible","55 Disponible","56 Disponible","57 Disponible","58 Disponible",
    "59 Disponible","60 Disponible","61 Disponible","62 Disponible","63 Disponible","64 Disponible",
    "65 Disponible","66 Disponible","67 Disponible","68 Disponible","69 Disponible","70 Disponible",
    "71 Disponible","72 Disponible","73 Disponible","74 Disponible","75 Disponible","76 Disponible",
    "77 Disponible","78 Disponible","79 Disponible","80 Disponible","81 Disponible","82 Disponible",
    "83 Disponible","84 Disponible","85 Disponible","86 Disponible","87 Disponible","88 Disponible",
    "89 Disponible","90 Disponible","91 Disponible","92 Disponible","93 Disponible","94 Disponible",
    "95 Disponible","96 Disponible","97 Disponible","98 Disponible","99 Disponible"








];


// Función para actualizar los elementos <ul> en el HTML
function actualizarElementos() {
    // Iteramos sobre los elementos de data
    data.forEach((item, index) => {
        // Obtenemos el <ul> correspondiente usando su id
        let ul = document.getElementById(`contenedor-${index}`);
        // Si existe el <ul> en el DOM, actualizamos su contenido
        if (ul) {
            let li = document.createElement('li'); // Creamos un nuevo elemento <li>
            li.textContent = item; // Establecemos el contenido del <li>
            ul.appendChild(li); // Añadimos el <li> al <ul>
        }
    });
}

// Llamamos a la función para que se ejecute al cargar la página
actualizarElementos();


function validarNumero(numero) {
    var regex = /^[0-9]{2}$/;
    return regex.test(numero);
}


function buscar() {

    let query = document.getElementById("search").value.trim();

    if(query === "") {
        return;
    }

    if (!validarNumero(query)) {
        alert("Por favor ingresa un número válido de dos dígitos (00-99).");
        return;
    }

    let results = [];

    for (let i=0; i < data.length; i++) {

        if (data[i].startsWith(query)) {
            results.push(data[i]);
        }
    }

    let resultsElement = document.getElementById("results");
    resultsElement.innerHTML = "";


    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            let li = document.createElement("li");
            li.textContent = results[i];
            resultsElement.appendChild(li);
        }
    } else {
        let li = document.createElement("li");
        li.textContent = "No existe el boleto: " + query;
        resultsElement.appendChild(li);
    }

    document.getElementById("search").value = "";

};

