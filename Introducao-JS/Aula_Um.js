// Manipulando um arquivo

// O que é uma variável = É um dado armazenado na mémoria porém pode ser alterado 
var preco = 25;
var desconto = 2;

var custo_total = preco - desconto;
// O que é uma constante = o valor não pode ser alterando mais continua sendo armazenado
const IMPOSTO = 0.5;

//------------------------------------------------------------------------------------------------------------------//
// Funções 
// function nome(PARAMENTROS{ }
function conta(preco,IMPOSTO,desconto){
    return preco - desconto * IMPOSTO;
}

conta(50,2,10); //chama a função 
//console.log(preco-desconto); - debugando 

//------------------------------------------------------------------------------------------------------------------//
//Javascript em uma página
//<script src=".." href="..."></script>
//Elementos no Dom = Document Object Model 
// document.getElementById
var heading1= document.getElementsByTagName(h1)