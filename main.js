const openModal = document.querySelector('.open');
const closeModal = document.querySelector('.close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = (el)=>{
    el.classList.remove('hidden');
    el.classList.remove('hidden');
}
const hideModal = (el)=>{
    el.classList.add('hidden');
    el.classList.add('hidden');
}

openModal.addEventListener('click',function(){
  showModal(modal);
  showModal(overlay);
});
closeModal.addEventListener('click',function(){
    hideModal(modal);
  hideModal(overlay);
});
overlay.addEventListener('click',function(){
    hideModal(modal);
  hideModal(overlay);
});

document.addEventListener('keydown',function(e){
if(e.key === 'Escape'){
    if(!document.querySelector('.modal').classList.contains('hidden')){
        hideModal(modal);
  hideModal(overlay);
    }
}})
