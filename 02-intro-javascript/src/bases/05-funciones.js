// funciones

const saludar = function (name) {
  return `Hola, ${name}`;
};

const saludar2 = (name) => {
  return `Hola, ${name}`;
};

const saludar3 = (name) => `Hola, ${name}`;
const saludar4 = () => `Hola mundo!!`;

console.log(saludar);
console.log(saludar2("Lorena"));
console.log(saludar3("Gabriela"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABCD",
  username: "123456",
});

console.log(getUser());

//Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUserActivo = (name) => ({ uid: "ABCD35", username: name });

/*function getUserActivo(name) {
  return { uid: "ABCD35", username: name };
}

const usuarioActivo = getUserActivo("Lorena");
console.log(usuarioActivo);*/

console.log(getUserActivo("Lorena"));
