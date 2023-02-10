const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// const person2 = person1; 
// l'operatore = oltre a creare una copia identica instaura una connessione mnemonica dei due oggetti perciò modificando uno si modifica anche l'altro.

// il metodo corretto per duplicare un oggetto, solo il contenuto, è:

const person2 = Object.assign({}, person1);

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = 'Simon'

console.log(person1);
console.log(person2);


