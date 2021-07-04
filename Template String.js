/*
Lucas Lourenco tem 18 anos, pesa 85 kg
tem 1.87 de altura e seu IMC é de Nvalor
Lucas Lourenco nasceu em 2002
*/
const nome = 'Lucas';
const sobrenome = 'Lourenco';
const idade = 18;
const peso = 87;
const alturaEmM = 1.87; 
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
