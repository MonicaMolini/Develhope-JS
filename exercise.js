const number = 15;

function letPromise(number){
    return new Promise ((resolve, reject) => {
setTimeout(() => {
    if (number > 10) resolve(number)
    else reject ("Error: not valid number")
}, 1000)
})
}


letPromise(number)
.then((number) => console.log(number))
.catch((error) => console.log(error))

