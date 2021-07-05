let varA = 'a'; //b
let varB = 'b'; //c
let varC = 'c'; //a


//1     2     3    /   1     2     3
[varA, varB, varC] = [varB, varC, varA]

//Lado esquerdo as variaveis e lado direito os valores que estão recebendo.

//Exemplo: varA está em primeiro dentro do " [1] " e varB está em primeiro dentro de " [2] "
//por isso varA vai receber valor de VarB pela ordem que está  

console.log(varA, varB, varC)