const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "2f3ff40744msh9d19a2e487a0dbdp1cb30ajsn9fcaf412f0f9",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

fetch(
  "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

let select = document.getElementById("select");
let option = document.querySelectorAll("option");
let div = document.getElementById("info-container");
let btn = document.getElementById("info");
btn.addEventListener("click", () => createOption());

async function createOption() {
  let sign = select.value;
  let res = await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
    options
  );

  let json = await res.json();

  div.innerHTML = `description: ${json.description} <br> compatibility: ${json.compatibility} <br> lucky time: ${json.lucky_time} <br> color: ${json.color} <br> mood: ${json.mood}`;

  let day = new Date();
  let hours = day.getHours(); //in effetti dovrei capire come convertirlo in pm e am ^^' (però giuro la logica funziona, l'ho testata!XD) studio un po'..
  if (json.lucky_time === hours) {
    let divcolor = document.createElement("div");
    divcolor.style.backgroundColor = `${json.color}`; //pure qui non riconosce tutti i colori..
    divcolor.innerHTML = "it's you lucky time!";
    div.append(divcolor);
  }
}
let btnrandom = document.getElementById("random");
btnrandom.addEventListener("click", () => randomSign());

async function randomSign() {
  let signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];
  let signrandom = signs[Math.floor(Math.random() * signs.length )];

  let sign = select.value;  
  let res = await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
    options
  );
  let res2 = await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signrandom}&day=today`,
    options
  );
    let json = await res.json();
    let json2 = await res2.json();
    let div2 = document.createElement("div")
    div2.innerHTML = `${json2.compatibility}`
    div.append(div2)

  if(json.compatibility === json2.compatibility){
    div.innerHTML = `Your sign: ${sign} <br> Random compatibility: ${json2.compatibility} <br> you are compatibles!`
  }else{
    div.innerHTML = `Your sign: ${sign} <br> Random compatibility: ${json2.compatibility} <br> you are not compatibles! :( `
  }
}
