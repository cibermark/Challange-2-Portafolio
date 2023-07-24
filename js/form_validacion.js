const inputsForm = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');


inputsForm.forEach(input =>{
    input.addEventListener('blur', (input) =>{
        validar(input.target);
    })
})

textarea.addEventListener('blur', (input) =>{
 if (input.target.validity.valid){
    console.log(input.target.value.length);
    if(input.target.value.length > 300){
        input.target.parentElement.classList.add("input-container--invalid")
        input.target.parentElement.querySelector('.input-message-error').innerHTML = "el memnsaje debe de tener menos de 300 caracteres"
       

    }else{
        input.target.parentElement.classList.remove("input-container--invalid")
            // input.parentElement.querySelector('.input-message-error').innerHTML = ''
            input.target.parentElement.classList.add("input-message-error")
    }

 }else{ validar(input.target)}
    
    
})  



function validar (input){
    const tipoInput = input.dataset.tipo //esto es para llarmar a los data-tipo
        console.log(tipoInput)
  
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        // input.parentElement.querySelector('.input-message-error').innerHTML = ''
        input.parentElement.classList.add("input-message-error")

    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeerror(tipoInput, input)
      
    }
}



// 

const tipoError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    name:{
        valueMissing: "Este campo esta vacio."
    },
    email:{
        valueMissing: "Este campo esta vacio.",
        typeMismatch: "EL correo no es valido.",
    },
    number:{
        valueMissing: "Este campo esta vacio",
        patternMismatch: "El numoero solo debe de contener 10 digitos (xxxxxxxxxx)"
        //debdio aque en el patter agregamos solo d/{10} tambien sirve para evadir que agreguen letras
    },
    message:{
        valueMissing: "Este campo esta vacio",
        patternMismatch: "El numoero solo debe de contener 10 digitos (xxxxxxxxxx)"
     
    }
   
}


function mostrarMensajeDeerror (tipoInput, input){
    let mensaje = '';
    tipoError.forEach(error => {
        if(input.validity[error]){
            console.log(error);
            console.log(input.validity[error])
            console.log(tipoInput)
             console.log(mensajesDeError[tipoInput][error])
             mensaje = mensajesDeError[tipoInput][error]
        }
    })
    console.log('hola de error')
    return mensaje;

}