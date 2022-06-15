const persona = {
  name: "Lorena",
  lastName: "Guartazaca",
  age: 28,
  direction: {
    city: "New York",
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

const persona2 = { ...persona };
persona2.name = "Maria";

//console.table(persona);
console.log(persona);
console.log(persona2);
