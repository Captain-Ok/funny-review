const ex = document.getElementById("exicellent");
const bad = document.getElementById("bad");

let audioBad = new Audio('./assets/comesept.mp3');
let audioEx = new Audio('./assets/best.mp3');

ex.addEventListener("click", ()=>{
    audioEx.play();
})

bad.addEventListener("click", ()=>{
    window.open("first.html")
})