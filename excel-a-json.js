const XLSX = require("xlsx");
const fs = require("fs");

try {

    console.log("Leyendo productos.xlsx...");

    const workbook = XLSX.readFile("productos.xlsx");

    const nombreHoja = workbook.SheetNames[0];

    const hoja = workbook.Sheets[nombreHoja];

    const productos = XLSX.utils.sheet_to_json(hoja);

    fs.writeFileSync(
        "productos.json",
        JSON.stringify(productos, null, 4)
    );

    console.log("✅ productos.json generado correctamente");

} catch (error) {

    console.error("❌ Error:");
    console.error(error);

}