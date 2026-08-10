const menuElement=document.querySelector('.hamburg-icon')
const panelElement = document.querySelector('.js-hamburg-menu')

menuElement.addEventListener('click', ()=>{
  panelElement.classList.toggle('is-open');
})