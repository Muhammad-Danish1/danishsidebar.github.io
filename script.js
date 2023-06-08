//*****  sleact open btn ,close btn and sidebar ********
const btnOpen = document.querySelector('.open-menu');
const btnClose = document.querySelector('.close-menu');
const sideBar = document.querySelector('.sidebar');

// *********** show and close sideBar through openbar***********
btnOpen.addEventListener('click', ()=>{
    sideBar.classList.toggle('show-sidebar');
})

// *********** close sideBar through closebtn ***********
btnClose.addEventListener('click', ()=>{
    sideBar.classList.remove('show-sidebar');
})