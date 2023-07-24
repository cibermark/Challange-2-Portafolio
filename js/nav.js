//toogle icon navbar

let menuLogo = document.querySelector('.menu_logo');
let menu = document.querySelector('.menu');

menuLogo.onclick = () =>{
    menuLogo.classList.toggle('fa-x')
    menu.classList.toggle('active');
}


// scroll section active link
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(section => {

        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let heigh = section.offsetHeight;
        let id  =  section.getAttribute('id');

       

        if (top >= offset && top <offset + heigh) {
            navLinks.forEach(links =>{
                links.classList.remove('activo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
            })
        }
    })

    
    let  header =  document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)


    // remove toogle icon and navbar 

    menuLogo.classList.remove('fa-x');
    menu.classList.remove('active');

}

// scrol reveal

ScrollReveal({ 
        reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,

});


ScrollReveal().reveal('.sobreMi_content, .reveal ', { origin: 'top'});
ScrollReveal().reveal('.reveal_bottom, .skills_row, .hobbies_row, .education_items, .projects_slides, form', { origin: 'bottom'});

ScrollReveal().reveal('.sobreMi_content h1, .about_img', { origin: 'left'});
ScrollReveal().reveal('.about_content, .sobreMi_content p, .skills_description ', { origin: 'right'});



// multiple text

const span = new Typed('.multiple-text', {
    strings:['Frontend Developer', 'English Language Teacher', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true

})

const name = new Typed('.logo_name', {
    strings:['Marco Antonio'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})
