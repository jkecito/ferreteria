const contenedor = document.getElementById("contenedor-productos");
const buscador = document.getElementById("buscarProducto");

let productos = [];

function mostrarProductos(listaProductos) {

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="producto">

                <h3>${producto.nombre}</h3>

                <p><strong>Código:</strong> ${producto.codigo}</p>

                <p><strong>Precio:</strong> $${producto.precio} MXN</p>

                <p><strong>Existencia:</strong> ${producto.existencia}</p>

            </div>
        `;
    });
}

async function cargarProductos() {

    const respuesta = await fetch("productos.json");

    productos = await respuesta.json();

    mostrarProductos(productos);
}

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});

cargarProductos();