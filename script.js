const btn= document.querySelector(".mobile-menu-btn");
        const sidebar= document.querySelector(".sidebar");
        btn.addEventListener("click", () => {
            sidebar.classList.toggle("-translate-x-full");   
        });

const overlay = document.querySelector('#overlay');
const addBtn = document.querySelector('#add-btn');
const closeBtn = document.querySelector('#close-modal');
const cancleModal = document.querySelector('#cancle-modal');
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const confirmBtn = document.querySelector('.confirmBtn');
const storedInput = localStorage.getItem('textinput');

addBtn.addEventListener('click',() =>{
    overlay.classList.remove('hidden');
    overlay.classList.add('grid');
})
closeBtn.addEventListener('click',() =>{
    overlay.classList.add('hidden');
    overlay.classList.remove('grid');
})
cancleModal.addEventListener('click',() =>{
    overlay.classList.add('hidden');
    overlay.classList.remove('grid');
})


confirmBtn.addEventListener('click',() =>{
    text.textContent = storageInput.value
    localStorage.setItem('textinput', text.textContent)      
})


function changeColor(getColor) {
    let bg = document.querySelector('bg');
    let colorlabel = getColor.value;
    bg.style.background = colorlabel;
}