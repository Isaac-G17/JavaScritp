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
  const texto = item.value.trim();

    if (texto !== "") {
        // Crear elemento li
        const li = document.createElement("li");

        // Agregar texto
        li.textContent = texto;

        // Añadir al ul
        conteinetList.appendChild(li);

        // Limpiar input
        item.value = "";
    }
});


// MODO OSCURO

const btndark = document.getElementById('toggle-dark');
const box = document.querySelector('body')

btndark.addEventListener('click', () =>{
    box.classList.toggle('dark-mode');
})

// FORMULARIO Y ATRIBUTOS

const input = document.getElementById('name-input');
const texto = document.getElementById('name-display');
const user = document.getElementById('user-name');
const profile = document.getElementById('profile-img');

input.addEventListener('input', () =>{
    const value = input.value.trim();

    // Cambiar texto en vivo
    user.textContent = value || "Invitado";

    // Cambiar imagen dinámicamente
    profile.setAttribute(
        "src",
        `https://ui-avatars.com/api/?name=${value || "JS"}&background=random`
    );
})

