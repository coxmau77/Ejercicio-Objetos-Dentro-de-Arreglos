let nuevaHeroina = {
  nombreAvenger: "capitana marvel",
  nombreHumano: "carol danvers",
  poder: "ser archi fuerte y volar por el espacio",
};

// 1. Obtener únicamente las claves (propiedades) del objeto
for (let propiedad in nuevaHeroina) {
  console.log("propiedad: " + propiedad);
}
// Imprime en consola:
// "nombreAvenger"
// "nombreHumano"
// "poder"

// 2. Obtener los valores dinámicos asociados a cada clave
for (let propiedad in nuevaHeroina) {
  // Se utiliza obligatoriamente Bracket Notation sin comillas para evaluar la variable
  console.log("nuevaHeroina[propiedad]: " + nuevaHeroina[propiedad]);
}
// Imprime en consola:
// "capitana marvel"
// "carol danvers"
// "ser archi fuerte y volar por el espacio"

// 3. Imprime ambas propiedades en un solo for in
for (let propiedad in nuevaHeroina) {
    console.log(`* ${propiedad}:  ${nuevaHeroina[propiedad]}`);
}