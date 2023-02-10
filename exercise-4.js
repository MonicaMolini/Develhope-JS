function nicknameMap(persons) {  
  let nickname = [];
  nickname = persons.map(function(person){
    return person.name + '-' + person.age;
  })
  return nickname.forEach(nick => console.log(nick));  
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

let nicknames = nicknameMap(persons);
console.log(persons);
// console.log(nicknames); non sono riuscita a richiamare la variabile senza che mi desse undefined
nicknameMap(persons)





