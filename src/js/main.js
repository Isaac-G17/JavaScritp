// --- TUS PRÁCTICAS AQUÍ ABAJO ---
console.log("DOM Playground listo para practicar 🚀");

// CONTADOR

const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");
const btnReset = document.getElementById("reset");
let counter = document.getElementById("counter-display");

let number = 0

btnDecrement.addEventListener("click", () => {
  counter.innerText --;
  number--;
  color()
});

btnReset.addEventListener("click", () => {
  counter.innerText = 0;
  number = 0;
  color()
});

btnIncrement.addEventListener("click", () => {
  counter.innerText ++;
  number++;
  color()
});

function color(){
  if(number < 0){
      counter.style.color = '#ff0000';
  }else if(number > 0){
    counter.style.color = '#3e8d2a';
  }else{
    counter.style.color = '#1e293b';
  }
}

// GESTION DE LISTAS

const btnAnadir = document.getElementById('add-item');
const conteinetList = document.getElementById('dynamic-list');
const item = document.getElementById('item-input');

btnAnadir.addEventListener('click', function (){
  const texto = item.value;
  console.log(texto)
});

// conteinetList.appendChild(tarea)