const name = "Lorena";
const lastName = "Guartazaca";

const fullName = name + " " + lastName;

console.log(fullName);

console.log(`Hola Mundo!!`);
console.log(`${name} ${lastName} ${1 + 1}`);

function getSaludo(name) {
  return `Hola ` + name;
}
console.log(`Este es un texto: ${getSaludo(name)}`);
