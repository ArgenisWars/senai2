/* let nota = 9

if (nota>=7) {
    console.log("Aluno Aprovado!");
} else if (nota >= 5) {
    console.log("Aluno de recuperação");        
} else {
    console.log("Aluno reprovado!");
 }

 //Estrutura de seleção
 let dia = 4

 switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda Feira");
        break;
    case 3:
        console.log("Terça Feira");
        break;
    case 4:
        console.log("Quinta Feira");
        break;
    case 5:
        console.log("Sexta Feira");
        break;
    case 6:
        console.log("Sabado");
        break;
    default: console.log("Valor invalido!");
 } */

 function calcular() {
    let valor1 = Number (document.getElementById("primeiroValor").value);
    let valor2 = Number (document.getElementById("segundoValor").value);
    const option = document.querySelector("input[name='option']:checked").value;

    if ((valor1>=0 && valor1<=100) && (valor2>=0 && valor2<=100)){
        switch (option) {
            case "+":
                document.getElementById("resultado").innerHTML = valor1 + valor2;
                break;
            case "-":
                document.getElementById("resultado").innerHTML = valor1 - valor2;
                break;
            case "*":
                document.getElementById("resultado").innerHTML = valor1 * valor2;
                break;
            case "/":
                document.getElementById("resultado").innerHTML = (valor1 / valor2).toFixed(2);
                break;
        }
    }else{
        alert("Digite valores válidos!");
    }
 }
