let num = window.document.getElementById('txtn')
let lista = window.document.getElementById('seln')
let res = window.document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar() {
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    let media = soma / (valores.length)
    var maior = Math.max.apply(null, valores)
    var menor = Math.min.apply(null, valores)
    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.`
    res2.innerHTML = `O maior valor informado foi ${maior}.`
    res3.innerHTML = `O menor valor informado foi ${menor}.`
    res4.innerHTML = `Somando todos os valores, temos ${soma}.`
    res5.innerHTML = `A média dos valores digitados é ${media}.`
}