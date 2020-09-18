console.log(' Media das Provas:')
n1 = 6
n2 = 7
media = (n1 + n2)/2
console.log(`A media do Aluno foi de: ${media}`)
console.log(media >= 7? 'Aprovado':'Reprovado')
console.log('============================')
nota1 = 8
nota2 = 9
media2 = (nota1 + nota2)/2
if(media2 >= 7){
  console.log(`A media foi de ${media2} aluno Aprovado`)
}else{
  console.log(`A media foi de ${media2} aluno Reprovado`)
}
console.log('==============================')
nt1 = 6
nt2 = 10
m = (nt1 + nt2)/2
if(m <= 4){
  console.log(`A media do aluno foi ${m} está Reprovado`)
}else if(m <= 6){
  console.log(`A media do aluno foi ${m} está em Recuperação`)
}else{
  console.log(`A media do aluno foi ${m} está Aprovado`)
}
