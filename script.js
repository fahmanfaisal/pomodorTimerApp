const btn= document.querySelector(".mobile-menu-btn");
        const sidebar= document.querySelector(".sidebar");
        btn.addEventListener("click", () => {
            sidebar.classList.toggle("-translate-x-full");   
        });
//moodalOverlay
const overlay = document.querySelector('#overlay');
const addBtn = document.querySelector('#add-btn');
const closeBtn = document.querySelector('#close-modal');
const cancleModal = document.querySelector('#cancle-modal');
//setaddLabel
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const confirmBtn = document.querySelector('.confirmBtn');
const storedInput = localStorage.getItem('textinput');
//setcolorLabel
const colorlabel = document.querySelector('#colorlabel');
const colorChnage = document.querySelector('#colorChnage');
const newText = document.getElementById('new-task');

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
    // text.textContent = storageInput.value
    localStorage.setItem('textinput', newText.value)
    // console.log(text.textContent);
    colorChnage.innerHTML = localStorage.textinput;
    
    colorChnage.style.fontWeight = "600"
    colorChnage.style.color = colorlabel.value;

    overlay.classList.add('hidden');
    overlay.classList.remove('grid');
})
