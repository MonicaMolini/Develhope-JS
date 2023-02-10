const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
// Non capendo bene la consegna ho usato più metodi:

console.log(Object.keys(person));  // solo con object.keys, ma senza coppia key/valore

console.log(Object.keys(person) + ' ' + Object.values(person));

console.log(Object.entries(person))

Object.entries(person).forEach(([key, value]) => {      //per me il metodo migliore
  console.log(key + ": " + value) 
})


// Print values of person using Object.keys