const panels = document.querySelectorAll('.project_slide');

// add a  foreach para cada panel

panels.forEach(function(panel) {
    panel.addEventListener('mouseover', function(){
        removeActiveClasses(); /* aqui esta funcion primero hace un loop por cada panel y elimina la clase 'active' */
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(function(panel){
        panel.classList.remove('active');
        console.log('1')
    })
}