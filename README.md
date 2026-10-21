# Ferretería Web

Proyecto numero 2, continuacion de la entrega 1 sobre..

## Objetivo

Crear una página web para una ferretería que permita:

- Mostrar un catálogo de productos.
- Actualizar productos mediante un archivo Excel.
- Publicar la aplicación en Azure.
- Integrar un chatbot utilizando Azure AI Foundry.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Git
- GitHub
- Azure (próximamente)
- Azure AI Foundry (próximamente)

## Estructura del proyecto

```text
web_ferreteria_cesar
│
├── index.html
├── estilos.css
├── script.js
├── productos.xlsx
├── productos.json
├── excel-a-json.js
├── package.json
├── README.md
└── .gitignore
```

## Flujo de trabajo

```text
productos.xlsx
        ↓
excel-a-json.js
        ↓
productos.json
        ↓
Página Web
```

## Actualizar productos

1. Modificar el archivo:

```text
productos.xlsx
```

2. Ejecutar:

```bash
node excel-a-json.js
```

3. Refrescar la página web.

## Funcionalidades implementadas

- Catálogo dinámico de productos.
- Búsqueda de productos.
- Lectura de datos desde JSON.
- Conversión automática de Excel a JSON.
- Control de versiones con Git.
- Respaldo del proyecto en GitHub.

## Próximas mejoras

- Publicación en Azure App Service.
- Diseño comercial para la ferretería.
- Integración con Azure AI Foundry.
- Chatbot para consulta de precios e inventario.

## Autor

CESAR GODINEZ HUERTA