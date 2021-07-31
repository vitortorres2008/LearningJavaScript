function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let pass = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        if (Number(pass.value) == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')

        } else {
            res.innerHTML = 'Contando: '
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(pass.value)
            if (i < f) {
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} `
                }
            }
            if (i > f) {
                for (let g = i; g > f; g -= p) {
                    res.innerHTML += `${g} `
                }
            }
        }
    }
}