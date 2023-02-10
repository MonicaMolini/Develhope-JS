function inner(){      
   return printName()   
   function printName(){
    let helloName = "Hello John";
    console.log(helloName);
}

setTimeout(inner, 1000)
