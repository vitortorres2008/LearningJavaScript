function somar(){
    var a = window.document.getElementById('txtn1')
    var b = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(a.value) 
    var n2 = Number(b.value)
    s = n1 + n2
    res.innerHTML = `a soma entre ${n1} e ${n2} é ${s}`
}