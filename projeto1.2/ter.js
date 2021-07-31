function verificar(){
var vel = window.document.getElementById('txtn1')
var res = window.document.getElementById('res')
var n = Number(vel.value)
if (n > 60){
    res.innerHTML = `MULTADO`
} else {
    res.innerHTML = `PROSSIGA`
}
}