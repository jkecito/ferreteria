const contenedor = document.getElementById("contenedor-productos");
const buscador = document.getElementById("buscarProducto");

const pregunta =
    document.getElementById("pregunta");

const btnConsultar =
    document.getElementById("btnConsultar");

const respuesta =
    document.getElementById("respuesta");

let productos = [];

async function cargarProductos() {

    const respuesta = await fetch("productos.txt");

    productos = await respuesta.json();

}

cargarProductos();

btnConsultar.addEventListener("click", () => {

    const texto = pregunta.value.toLowerCase().trim();

    if (texto === "") {

        respuesta.innerHTML = `
            <p>
                Por favor escribe el nombre o código de un producto.
            </p>
        `;

        return;

    }


    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto) ||
        producto.codigo.toLowerCase().includes(texto)
    );

    if (resultados.length > 0) {

        respuesta.innerHTML = "";

        resultados.forEach(producto => {

            respuesta.innerHTML += `
                <h3>${producto.nombre}</h3>

                <p><strong>Código:</strong>
                ${producto.codigo}</p>

                <p><strong>Precio:</strong>
                $${producto.precio} MXN</p>

                <p><strong>Existencia:</strong>
                ${producto.existencia}</p>

                <hr>
            `;

        });

    } else {

        respuesta.innerHTML = `
            <p>
                Lo siento, no encontré productos relacionados con:
                <strong>${pregunta.value}</strong>
            </p>
        `;

    }

    pregunta.value = "";

});

pregunta.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        btnConsultar.click();

    }

});