


function createDividaTemplate(id, nome, cpf,email,telefone,descricao,valor,situacao) {
    return `
            <td>${id}</td>
            <td>${nome}</td>
            <td>${cpf}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${descricao}</td>
            <td id=${id}>${valor}</td>
            <td id=situacao${id}>${situacao}</td>
            <td>
                <button type="button" class="btn btn-success btn-sm" onclick="quitarDivida(event,${id})">Quitar</button>
                <button type="button" class="btn btn-danger btn-sm" st=${id} onclick="excluirDivida(event)">Excluir</button>
            </td>
        `;
}

var soma = 0;

function adicionarDivida(e) {
        let nome = document.querySelector("#dividaNomeInput").value
        let cpf = document.querySelector("#dividaCpfInput").value
        let telefone = document.querySelector("#dividaTelefoneInput").value
        let email = document.querySelector("#dividaEmailInput").value
        let descricao = document.querySelector("#dividaDescInput").value
        let valorDevido = document.querySelector("#dividaValorInput").value
        let situacao = 'pendente'
        let saldoDevedor = document.querySelector("#saldoDevedor")
        let id = Math.floor(Math.random()* 500) + 100;
        let table = document.querySelector("#dividasTable")
        
    if(!TestaCPF(cpf)){
        return alert("CPF INVALIDO")
       
    }else{
        let recebeTemplate = createDividaTemplate(id,nome,cpf,email,telefone,descricao,valorDevido,situacao)
        table.innerHTML+= recebeTemplate
        soma = parseFloat(soma) + parseFloat(valorDevido);
        saldoDevedor.innerHTML = soma;
        alert("Cadastro efetuado com sucesso")
    }
    e.preventDefault()

}

function quitarDivida(event,id) {
    event.target.remove()
    document.getElementById(`situacao${id}`).innerHTML = 'Pago'
    document.querySelector("#saldoDevedor").innerHTML = parseFloat(document.querySelector("#saldoDevedor").innerHTML) - parseFloat(document.getElementById(`${id}`).innerHTML)
    document.getElementById(`${id}`).innerHTML=0
    soma = parseFloat(document.querySelector("#saldoDevedor").innerHTML) - parseFloat(document.getElementById(`${id}`).innerHTML)
}

function excluirDivida(event) {
    soma = 0
    let teste = event.target.parentNode.parentNode.children
    let aux = 0;
    for(var i = 0;i<teste.length;i++){
        if(teste[i].getAttribute('id')==`situacao${event.target.getAttribute('st')}`){
            if(teste[i].innerHTML=='Pago'){
                aux = 1;
            }
        }
    
    }
    if(aux==1){
        event.target.parentNode.parentNode.remove()
    }else{
        return alert('Quite a divida primeiro!!')
    }
   
}



function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

