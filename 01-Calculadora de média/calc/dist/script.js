var nomeAluno = "Hamilton"
var nota1 = 10
var nota2 = 9
var nota3 = 8.5
var nota4 = 2.85
var situa

var mediaFinal = ((nota1 + nota2 + nota3 + nota4) /4 ).toFixed(2)

console.log("Seja muito bem vindo, " + nomeAluno + "!")
console.log("Sua média é " + ((nota1 + nota2 + nota3 + nota4) /4 ).toFixed(2))

if(mediaFinal >= 7) {
  console.log("Parabéns!!! Você foi aprovado!")
  situa = "Aprovado(a)"
} else {
  console.log("Lamento muito. Sua nota não foi suficiente.")
  situa = "Reprovado(a)"
}

// Personalizações do desafio
var escreveMedia = document.getElementById("media")
escreveMedia.innerHTML = "Média: " + mediaFinal

var resultado = document.getElementById("situa");
console.log(resultado.innerHTML)
resultado.innerHTML = "Situação: " + situa