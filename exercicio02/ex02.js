function verificar(){
let ano = window.document.getElementById('ano')
let an = Number(ano.value)
let agora = new Date()
let y = agora.getFullYear()
    if(ano.value.length == 0 || an > y){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('gen')
        var idade = y - an
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-masc.jpg')
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-masc.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'adulto-masc.jpg')
            } else{
                img.setAttribute('src', 'idoso-masc.jpg')
            }
        } else if(fsex[1].checked){
            gênero = 'Feminino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-fem.jpg')
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-fem.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'adulto-fem.jpg')
            } else{
                img.setAttribute('src', 'idoso-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}