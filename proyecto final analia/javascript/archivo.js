const habilidades = document.querySelector(".habilidades")
window.addEventListener("scroll",()=>{
    let pantalla =window.innerHeight;
    let ubicacionObjeto = habilidades.getBoundingClientRect().top
    if(ubicacionObjeto <= pantalla){
        habilidades.classList.add("aparece-habilidades")
        }
    else{
        habilidades.classList.remove("aparece-habilidades")
    }
})

// movimiento section clase mitad//

const mitad = document.querySelector(".mitad")
window.addEventListener("scroll",()=>{
    let pantalla =window.innerHeight;
    let ubicacionObjeto = mitad.getBoundingClientRect().top
    if(ubicacionObjeto <= pantalla){
        mitad.classList.add("aparece-mitad")
        }
    else{
        mitad.classList.remove("aparece-mitad")
    }
})


