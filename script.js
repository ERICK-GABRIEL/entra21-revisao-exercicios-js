
//Criando variaveis de cada tipo
var number = 10;
var string = "Erick";
var boolean = false;
let array = [];
array.push("Valor", "Unidade", "Tamanho")
var json = '{"nome":"Erick"}';
var obj = JSON.parse(json);

function funcao() {
};

function funcaoComParametros(validacao) {

}

//Exibindo variaveis no log
console.log(number);
console.log(string);
console.log(boolean);
console.log(array);
console.log(obj);
console.log(funcao);

//Exibindo TypeOf no log
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof array);
console.log(typeof funcao);
console.log(typeof obj);


//Inserindo IF em cada variavel para tomar decisao

if (number == 10) {
    alert("Esse é o numero 10")

} else {
    alert("Essse nao é o numero 10")
}

if (string == "João") {
    alert("Esse é o João")

} else {
    alert("Essse nao é o João")
}

if (boolean == true) {
    alert("Isso é True")

} else {
    alert("Isso é False")
}

if (!obj == {}) {
    alert("Esse JSON está vazio")

} else {
    alert("Esse JSON tem valor")
}

if (!array == {}) {
    alert("Esse ARRAY está vazio")

} else {
    alert("Esse ARRAY nao esta vazio")
}


//Usando Switch para tomar decisao
var nota = number;
switch (nota) {
    case 10:
        console.log("Voce tirou 10 parabens");
        break;

    case 9:
        console.log("Voce tirou 9 parabens");
        break;
    case 8:
        console.log("Voce tirou 8 ");
        break;
    case 7:
        console.log("Voce tirou 7 ");
        break;
    case 6:
        console.log("Voce tirou 6 ");
        break;
    case 5:
        console.log("Voce tirou 5 ");
        break;
    case 4:
        console.log("Voce tirou 4 ");
        break;
    case 3:
        console.log("Voce tirou 3 ");
        break;
    case 2:
        console.log("Voce tirou 2 ");
        break;
    case 1:
        console.log("Voce tirou 1");
        break;
    case 0:
        console.log("Voce tirou 0");
        break;

    default:
        break;
}


for (let count= 0; count < array.length; count++) {
    const element = array[count];
    
    alert ('Os itens do Array sao: ' + element);
}

array.forEach((array) => {
    console.log("Tipo: "+array);
    
});



document.querySelectorAll('h1')[0].style.color = 'red'
