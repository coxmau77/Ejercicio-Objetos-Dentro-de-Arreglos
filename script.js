// https://pledu.plataforma5.la/curso-introductorio-frontend-st-brendans/u12---object-data-type./ejercicio-pr*ctico*-objetos-dentro-de-arreglos-c9645bdd

// Arreglo que contiene múltiples objetos de vehículos
let autos = [
  {
    marca: "Citroen",
    modelo: "C3",
    año: 2013,
    dueño: "Juan",
    color: {
      capot: "gris",
      puertas: "negro",
    },
    dueñosAnteriores: [], // Comprado 0KM
  },
  {
    marca: "Honda",
    modelo: "Fit",
    año: 2016,
    dueño: "Santiago",
    color: {
      capot: "rojo",
      puertas: "rojo",
    },
    dueñosAnteriores: ["Jorge", "Iván"],
  },
];

// Estado inicial del objeto
console.log(`Dueño: ${autos[0].dueño}`);
console.log(`Dueños Anteriores cantidad: ${autos[0].dueñosAnteriores.length}`);
console.log(`Lista de Dueños Anteriores: ${autos[0].dueñosAnteriores}`);
console.log(`Color capot: ${autos[0].color.capot}`);
console.info("------------------------");
console.log(`Dueño: ${autos[1].dueño}`);
console.log(`Dueños Anteriores cantidad: ${autos[1].dueñosAnteriores.length}`);
console.log(`Lista de Dueños Anteriores: ${autos[1].dueñosAnteriores}`);
console.log(`Color capot: ${autos[1].color.capot}`);
console.info("------------------------");

// Modificación de propiedades
// Santiago le compra el auto a Juan y le pinta el capot a negro.
// ¿Cómo harías para modificar esas Propiedades?

autos[0].dueño = "Santiago"; // Reasigna el dueño
autos[0].dueñosAnteriores.push("Juan"); // Agrega "Juan" al arreglo de dueños anteriores
autos[0].color.capot = "negro"; // Modifica la sub-propiedad capot del objeto color

console.log(`Dueño: ${autos[0].dueño}`);
console.log(`Dueños Anteriores cantidad: ${autos[0].dueñosAnteriores.length}`);
console.log(`Lista de Dueños Anteriores: ${autos[0].dueñosAnteriores}`);
console.log(`Color capot: ${autos[0].color.capot}`);
console.info("------------------------");
console.log(`Dueño: ${autos[1].dueño}`);
console.log(`Dueños Anteriores cantidad: ${autos[1].dueñosAnteriores.length}`);
console.log(`Lista de Dueños Anteriores: ${autos[1].dueñosAnteriores}`);
console.log(`Color capot: ${autos[1].color.capot}`);
