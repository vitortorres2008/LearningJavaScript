function carregar(){
let titu = window.document.getElementById('titu')
let img = window.document.getElementById('imagem')
var a = window.document.getElementById('corpo')
var agora = new Date()
var hora = agora.getHours()

titu.innerHTML = `Agora são ${hora} horas`
if(hora>=6 && hora<12){
    img.src = 'img/manha.jpg'
    a.style.background = 'blue'
}else if(hora>=12 && hora<18){
    img.src = 'img/tarde.jpg'
    a.style.background = 'green'
}else {
    img.src = 'img/noite.jpg'
    a.style.background = 'red'
}
}