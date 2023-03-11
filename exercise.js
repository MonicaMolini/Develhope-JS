function repeatHello(callback){
    let stop = setInterval(callback,1000)
    setTimeout(() => clearInterval(stop), 8000)
}

let sayHello = () => console.log("Hello");

repeatHello(sayHello)
