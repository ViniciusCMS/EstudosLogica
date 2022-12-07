/*Questão 1
console.log ("Olá Mundo");
okay
*/

/*Questão 2
var nome = prompt("Qual seu nome ? ");

alert("Olá " + nome);

okay
*/

/*Questão 3
var nome = prompt("Nome do funcionário: ");
var salario = prompt("Insira o salario do funcionario: " + nome)

alert("O funcionario " + nome + " tem o salario mensal de " + salario + " reais. ");

okay
*/

/*Questão 4
var n1 , n2 = ("")

n1 = parseInt(prompt('Insira um primeiro numero entre 0 e 9: '));
n2 = parseInt(prompt('Insira um segundo numero entre 0 e 9: '));
alert ('A soma dos numeros inseridos anteriormente é: ' + (n1 + n2));

okay
*/

/*Questão 5
var aluno, n1, n2, n3 = ("");

aluno = prompt("Insira o nome do aluno: ")
n1 = parseFloat(prompt("Insira a nota da Primeira Unidade: "));
n2 = parseFloat(prompt("Insira a nota da Segunda Unidade: "));
n3 = parseFloat(prompt("Insira a nota da Terceira Unidade: "))

alert ("A media do aluno " + aluno + " é " + ((n1 + n2 + n3)/3));

okay
*/

/*Questão 6 
var n1, antecessor, sucessor = ("")
n1 = parseInt(prompt("Insira um numero inteiro qualquer: "));
antecessor = (n1 - 1);
sucessor = (n1 + 1);

alert ("O antecessor de " + n1 + " é " + antecessor + " e o sucessor de " + n1 + " é " + sucessor);

okay
*/

/*Questão 7 
var n = ("");

n = parseFloat(prompt("Insira um numero qualquer, inteiro ou não(caso seja um numero decimal, separar por . ao inves de ,): "));
alert ("O dobro de " + n + " é: " + (n*2) + " e a terça parte de " + n + " é: " + (n/3));

okay
*/

/*Questão 8
var distancia, km, hm, dam, dm, cm, mm = ("");

distancia = parseFloat(prompt("Insira uma distancia qualquer em metros para a conversão: "))

    km = (distancia/1000);
    hm = (distancia/100);
    dam = (distancia/10);
    dm = (distancia*10);
    cm = (distancia*100);
    mm = (distancia*1000);
alert ("A distancia  de " + distancia + " Metros corresponde a " + km + " Kilometros/ " + hm + " Hectometros/ " + dam + " Decametros/ " + dm + " Decimetros/ " + cm + " Centimetros/ " + mm + " Milimetros. " )

okay
*/

/*Questão 9 
var carteira, dolar = ("")
carteira = parseFloat(prompt("Insira o valor total em reais de sua carteira: "));
dolar = (carteira/3.45);
alert ("Com o valor de " + carteira + " R$" + "Você pode comprar um total de " + dolar + " Dolares ")

okay
*/

/*Questão 10
var largura, altura, m2, tinta = ("");
    largura = parseFloat(prompt("Insira a largura da parede: "));
    altura = parseFloat(prompt("Insira a altura da parede: "));

    m2 = (largura*altura);
alert ("A parede tem uma area de " + m2 + "M²");
    tinta = (m2/2);
alert ("Você ira precisar de " + tinta + " litros de tinta para pintar " + m2 + "M² de parede. ");

okay
*/

/*Questão 11
//delta = 2*b - 4*a*c
var a, b, c, delta = ("")
    a = parseInt(prompt("Insira o valor de a"))
    b = parseInt(prompt("Insira o valor de b"))
    c = parseInt(prompt("Insira o valor de c"))
    delta = ((2*b)-(4*a*c))
alert ("O valor de delta é = " + delta)
okay
*/

/*Questão 12
var produto, desconto, promocional = ("")
    produto = parseFloat(prompt("Insira o valor do produto que deseja ofertar a promoção de 5% de desconto: "))
    desconto = (produto*0.05)
    promocional = (produto - desconto)

alert ("O produto que você escolheu tem um desconto de: " + desconto + " Totalizando um valor de: " + promocional)
okay
*/

/*Questão 13
var salario, aumento, total = ("")
    salario = parseFloat(prompt("Insira seu salario para receber o reajuste de 15%: "))
    aumento = (salario*0.15)
    total = (salario + aumento)

alert ("Neste mês seu salario tera um reajuste de + " + aumento + " Totalizando: " + total)
okay
*/

/*Questão 14
var km, dias, veiculo, total = ("")
    veiculo = prompt("Insira a placa do veiculo: ")
    km = parseFloat(prompt("Insira a kilometragem total rodada pelo veiculo de placa: " + veiculo))
    dias = parseFloat(prompt("Insira tambem a quantidade de dias que o veiculo de placa " + veiculo + " passou alugado "))
    total = ((km*0.20) + (dias*90))
alert ("O valor do aluguel do veiculo de placa " + veiculo + " Totalizou em: R$" + total)
okay
*/

/*Questao 15
var funcionario, dias, horas, salario = ("")
    funcionario = prompt("Insira o nome do funcionario: ")
    dias = parseInt(prompt("Insira a quantidade de dias que o funcionario " + funcionario + " Esteve em atividade este mês:"))
    horas = (dias*8)
    salario = (horas*25)
alert ("O funcionario " + funcionario + " Trabalhou um total de " + horas + " horas este mês. Seu salario contabiliza em: R$" + salario)
okay
*/

/*Condicional 1
var nome, ano, idade = ("")
    nome = prompt("Insira seu nome: ")
    ano = parseInt(prompt("Insira o ano em que voce nasceu: "))
    idade = (2022 - ano)
    
if(idade >= 16 && confirm("Voce esta com titulo de eleitor regularizado? ")==true){
    
    alert ("Você esta ápto a votar nas eleições deste ano")

    }else{

        alert("Você não está liberado para votar. ")

    }
okay
*/

/*Condicional 2
var n = ("")
    n = parseInt(prompt("Insira um numero inteiro qualquer"))

    if(n%2 == 0){
        alert("O numero digitado é par. ")
    }else{
        alert("O numero digitado é impar. ")
    }
okay    
*/

/*Condicional 3
var n1, n2, n3, media = ("")
    n1 = parseFloat(prompt("Insira a nota da primeira unidade:\nUse ponto no lugar da virgula"))
    n2 = parseFloat(prompt("Insira a nota da segunda unidade:\nUse ponto no lugar da virgula"))
    n3 = parseFloat(prompt("Insira a nota da terceira unidade:\nUse ponto no lugar da virgula"))
    media = ((n1+n2+n3)/3)
if(media>=7){
    alert("O aluno foi aprovado com a media " + media)
    }else{
        alert("O aluno foi reprova e sera encaminhado para recuperação.")
        }
okay
*/

/*Condicional 4
var peso, altura, imc = ("")
    peso = parseFloat(prompt("Insira o seu peso em Kg:\nUse ponto no lugar da virgula "))
    altura = parseFloat(prompt("Insira uas altura em metros \nUse ponto no lugar da virgula"))
    imc = (peso/(altura^2))

alert ("Seu Indice de Massa Corporal é: " + imc)

        if(imc<17){
            alert("Você esta muito abaixo de seu peso ideal.")
        }else if(imc>=17 && imc<=18.5){
            alert("Você esta abaixo do peso ideal.")
        }else if(imc>=18.5 && imc<=25){
            alert("Você esta no peso ideal para alguem de sua altura")
        }else if(imc>=25 && imc<=30){
            alert("Você esta com sobrepeso")
        }else if(imc>=30 && imc<=35){
            alert("Você esta com leve grau de obesidade")
        }else if(imc>=35 && imc<=40){
            alert("Você está com um grau de obesidade alto")
        }else if(imc>40){
            alert("Você esta com um grua de obesidade morbida, procure auxilio nutricional.")
        }
*/

/*Condicional 4
var n = ("")
        n = parseInt(prompt("Digite 1 para doar R$10\nDigite 2 para doar R$20\nDigite 3 para doar R$30\nDigite 4 para doar R$40\nQuanto deseja doar? "))
        switch (n) {
            case 1:
                alert("Você optou por doar R$10, obrigado")
                break
            case 2:
                alert("Você optou por doar R$20, obrigado")
                break
            case 3:
                alert("Você optou por doar R$30, obrigado")
                break
            case 4:
                alert("Você optou por doar R$40, obrigado")
                break
            default:
                alert("Você nao digitou uma opção valida")
        }
*/


/* Esse array é utilizado dentro das funções. Cada placa neste array representa uma entrada do respectivo veículo no estacionamento. Não é necessário alterar esse array. 
var placas = [
     'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
     'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
     'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
     'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
     'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
     'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
     'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
     'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
     'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'AKX-3333', 'RXB-2525'
  ]
function calcularNumeroDeEntradas(placa){
    var numeroDeEntrada = ("")
        for (i=0;i<placas.length; i++){
            if (placa==placas[i]){
                numeroDeEntrada++
            }
        }
    return numeroDeEntrada
}

function calcularValorDevido(placa){
    var debito = ("")
    var entradaAdicional = (calcularNumeroDeEntradas(placa)-20)

        if(calcularNumeroDeEntradas(placa)>20){
            return (200 + (5*entradaAdicional))
        }else{
            debito = calcularNumeroDeEntradas(placa)*10 
        }
return debito
}
*/

/*
var notas = [1,0,1,3,3,5]

function calculaGostos(notas){
    var n1 = []
    var n2 = []
    var n3 = []
        for (i=0; i<notas.length ; i++){
            if (notas[i]>=0 && notas[i]<=1){
                n1.push(notas[i])
            }else if (notas[i]>=2 && notas[i]<=3){
                n2.push(notas[i])
            }else if(notas[i]>=4 && notas[i]<=5){
                n3.push(notas[i])
            }
        }
return [n1.length, n2.length, n3.length]
}
*/

/*Questão16
var qtdDiaria, anosFumados, idade, qndComecou, diasFumados, totalFumados, perdaVida, diasPerdidos = ("")

    idade = parseInt(prompt("Insira sua idade aqui: "))
    qtdDiaria = parseInt(prompt("Insira quantidade diaria de cigarros que você consome: "))
    qndComecou = parseInt(prompt("Com quantos anos começou a fumar ? "))
    anosFumados = (idade - qndComecou)
    diasFumados = (anosFumados*365)
    totalFumados = (diasFumados*qtdDiaria)
    perdaVida = ((totalFumados*10)/60)
    diasPerdidos = (perdaVida/24)
alert("Você ja fumou um total de " + diasFumados + " dias. Um total de " + totalFumados + " cigarros")
alert("A quantidade fumado lhe fez perder " + perdaVida + " Horas de vida. Um total de " + diasPerdidos + " dias")
*/

/*Questão 17
var vlcAtual, multa = ("");
    vlcAtual = parseInt(prompt("Velocidade do veiculo em km/h:"));
    multa = ((vlcAtual - 80)*5)
    if(vlcAtual>80){
        alert("O veiculo ultrapassa a velocidade maxima, multa emitida no valor de: R$" + multa + ",00")
    }
*/

/*Questão 18
var idade, ano, votar = ("");
    ano = parseInt(prompt("Insira seu ano de nascimento: "));
    idade = parseInt(2023 - ano);
if(idade>= 16){
    alert("Você ja está apto para votar")
}else{
    alert("Sua idade ainda não pemite paticipar do processo eleitoral")
}
*/

/*Questão 19
var nome, nota1, nota2, media, aprovacao= ("");
    nome = prompt("Insira seu nome: ");
    nota1 = parseFloat(prompt("Insira a nota da primeia avaliação: "));
    nota2 = parseFloat(prompt("Insira a nota da segunda avaliação: "));
    media = ((nota1 + nota2)/2);
    alert("Aluno: " + nome +". " + "Media: " + media)
    if(media>=7){
        alert("O aluno " + nome + " foi aprovado")
    }else{
        alert("O aluno " + nome + " foi reprovado")
    }
*/

/*Questão 20
var numero, verif = ("")
    numero = parseInt(prompt("Insira um numero inteiro qualquer. "))
    verif = (numero/2)
if(Number.isInteger(verif)){
    alert("O numero inserio anteriormente é par")
}else{
    alert("O numero inserio anteriormente é impar")
}
*/

/*Questão 21
var ano = ('');
    ano = parseInt(prompt("Insia um ano qualquer"));
    if(ano % 4 == 0 && ano % 100 != 0){
        alert('ano bissexto')
    }else if(ano % 400 == 0){
        alert('ano bissexto')
    }else{
        alert('ano nao bissexto')
    }
*/

/*Questão 22
var nome, ano = ('');
    nome = prompt("Insira seu nome: ");
    ano = parseInt(prompt("Insira seu ano de nascimento: "));
    idade = parseInt(2023 - ano);
if(idade>= 18){
    alert("Processo de alistamento obrigatorio para o cidadão de nome: " + nome)
}else{
    alert("Processo de alistamento obrigatorio não é necessario")
}
*/
/*Questão 23
var nome, sexo, valorTotal, desconto = ('');
    nome = prompt("Insira seu nome aqui: ");
    sexo = prompt("Insira o sexo que voce se identifica\n Masculino = M \n Feminino = F");
    valorTotal = parseFloat(prompt("Insira o valor da compra para obter o desconto"));
if(sexo == "M"){
    desconto = (valorTotal *0.05)
    alert(desconto)
}else if(sexo== "F"){
    desconto =(valorTotal*0.13)
    alert(desconto)
}
*/
/*Questão 24
var viagem, valor = ('');
    viagem = parseFloat(prompt("Insira a distancia estimada de sua viagem"));
if(viagem<=200){
    valor = (viagem*0.5)
    alert("O valor da passagem é de: " +valor)
}else if(viagem>200){
    valor = (viagem*0.45)
    alert("O valor da passagem é de: " +valor)
}
*/
/*Questão 25
var a1, a2, a3 = ('');
    a1 =  parseInt(prompt("Insira o valor da primeira aresta do triangulo"));
    a2 =  parseInt(prompt("Insira o valor da segunda aresta do triangulo"));
    a3 =  parseInt(prompt("Insira o valor da terceira aresta do triangulo"));
if(a1<=(a2+a3) && a2<=(a1+a3) && a3<=(a1+a2)){
    alert("O triangulo sera formado sem complicações")
}else{
    alert("As arestas nao se encaixam para formar um triangulo")
}
*/