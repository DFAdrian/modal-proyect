const modal = document.getElementById('modal');
const modalDisplay = document.getElementById('modal-display');
const closeModal = document.getElementById('close-modal');


modalDisplay.addEventListener('click',()=>{
    modal.classList.remove('container-modal--hide')
})


closeModal.addEventListener('click',()=>{
    modal.classList.add('container-modal--hide')
})
