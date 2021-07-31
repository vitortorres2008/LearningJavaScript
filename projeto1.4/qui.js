let num = [5, 8, 4]

num[3] = 6 //acrescentará o número 6 na posição 3 --> [5, 8, 4, 6]

num.push(7) //acrescentará o número 7 à ultima posição do array --> [5, 8, 4, 6, 7]

num.length //dará o comprimento do array --> [5, 8, 4, 6, 7] --> 5

num.sort() //colocará os números do array em ordem crescente --> [4, 5, 6, 7, 8]

num.indexOf(7) //retornará a posição do numero 7 --> 3
num.indexOf(3) //caso o número não exista dentro do array, este retornará -1