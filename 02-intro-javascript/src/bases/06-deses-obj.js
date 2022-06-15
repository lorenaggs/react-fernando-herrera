//Desestructuración
const persona = {
  name: "Lorena",
  age: 28,
  clave: "Iroman",
};

const { name, age, clave } = persona;

console.log(name);
console.log(age);
console.log(clave);

const context = ({ clave, name, age, rango = "Capitán" }) => {
  //console.log(name, age, rango);

  return {
    nombreClave: clave,
    anos: age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  anos,
  latlng: { lat, lng },
} = context(persona);

console.log(nombreClave, anos);
console.log(lat, lng);
