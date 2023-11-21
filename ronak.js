burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')



burger.addEventListener('click',()=>{
    // logo.classList.toggle('h-class-resp');
    // navList.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('navheight-resp')
})