function multiplyByTwo(value) {
  let number = 2;
  return function inner(){
    return console.log(value * number);
  }
}

multiplyByTwo(4)()