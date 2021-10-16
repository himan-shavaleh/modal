const openModal = document.querySelector('.open');
openModal.addEventListener('click',function(){
    document.querySelector('.modal').classList.remove('hidden');
document.querySelector('.overlay').classList.remove('hidden');
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
});
document.querySelector('.overlay').addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
});

document.addEventListener('keydown',function(e){
if(e.key === 'Escape'){
    if(!document.querySelector('.modal').classList.contains('hidden')){
        document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
    }
}})
