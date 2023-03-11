const isLogged = true;

function isUserLogged(isLogged){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {            
            if(isLogged === true) {                
                resolve(Math.random())}
            else reject("Error!")
        }, 1000)
    })
}

function getUser(number){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) resolve ({name: "John", age: 24})
            else reject ("Error: not found!")
        }, 1000)
    })
}

isUserLogged(isLogged)
.then(getUser)
.then ((value) => console.log(value))
.catch((error) => console.log(error))
