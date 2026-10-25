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

btnConsultar.addEventListener("click", async () => {

    const texto = pregunta.value.trim();

    if (texto === "") {

        respuesta.innerHTML = `
            <p>
                Por favor escribe una consulta.
            </p>
        `;

        return;

    }

    respuesta.innerHTML =
        "<p>Consultando asistente...</p>";

    try {

        const apiResponse = await fetch(
            "/chat",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            pregunta: texto
        })
    }
);

        const data =
            await apiResponse.json();

        respuesta.innerHTML = `
            <p>${data.respuesta}</p>
        `;

    }
    catch (error) {

        console.error(error);

        respuesta.innerHTML = `
            <p>
                Error al consultar el asistente.
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