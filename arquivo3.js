function app(){
            var nome = document.getElementById("nome");
            var cpf = document.getElementById("cpf");
            var dataNasc = document.getElementById("data-nascimento");
            var idade = document.getElementById("idade");
            var url = document.getElementById("url");
            var tel = document.getElementById("tel");
            var desc = document.getElementById("descricao");
            var val = document.getElementById("valor");
            var data = document.getElementById("data");
            var total =document.getElementById("val-total");
            var cadastrar = document.getElementById("botao");
            var botaoAdd =  document.getElementById("add");
            var cadastroRota = document.getElementById("cadastro-rota")
            var cadastroTela = document.getElementById("cadastro-tela")
            var telaInicial = document.getElementById("tela-inicial")
            var back = document.getElementById("botao-voltar")
            var listaCadastrados = document.getElementById("lista-cadastrados")
            var lixeira = [];
            var dividas = [
                
            ]
            var clientes=[
            ]

            function cadastrarCliente(e){
                {
                    e.preventDefault()
                    if(nome.value===''||cpf.value===''||dataNasc.value==''||dividas.length==0)
                        {
                            return(alert("Por favor preencha os campos obrigatorios!"))



                    }else{
                        
                        alert("Cliente cadastrado com sucesso!!")
                        clientes.push(
                            {
                                // id:
                                nome:nome.value,
                                cpf:cpf.value,
                                dataNascimento:dataNasc.value,
                                idade:idade.value,
                                urlFoto:url.value,
                                tel:tel.value,
                                dividas: dividas,    
                            }
                        )
                                      //n pode usar adicionar com foreach
                        listaCadastrados.innerHTML+=
                            `<tr id="single">
                                <th>`+nome.value+`</th>   
                                <th>`+cpf.value+`</th>
                                <th>`+dataNasc.value+`</th>
                                <th>`+idade.value+`</th>
                                <th>`+tel.value+`</th>
                                <th>
                                    <input  type="button" class="atualizar" value="Atualizar" />
                                    <input  onClick="this.parentNode.parentNode.remove()" type="button" class="excluir" value="Excluir" atr=`+cpf.value+` />
                                </th>
                            </tr>`
                            
                        dividas = [];
                        console.log(clientes)
                    }
                     $("#cadastro-tela").addClass("hide");
                     $("#tela-inicial").removeClass("hide"); 
                     $('#form').each (function(){
                        this.reset();
                      });
                    
                }
            }

            function isNumber(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }
            

            cadastroRota.addEventListener("click",function(){
                        telaInicial.classList.add("hide")
                        cadastroTela.classList.remove("hide")
            })

            back.addEventListener("click",function(){
                telaInicial.classList.remove("hide")
                cadastroTela.classList.add("hide")
            })
           cadastrar.addEventListener("click",function(e){cadastrarCliente(e)})
           botaoAdd.addEventListener("click",()=>{
                    cond = parseFloat(val.value);
                    if(desc.value===""||val.value===""||isNumber(cond)!=true){
                        return(alert("Preencha os campos das dividas corretamente!!"))
                        
                    }else{
                        dividas.push(  {
                            descricao:desc.value,
                            valor:val.value, 
                            data: data.value,
                        }) 
                    }
                    
                    var soma = 0;
                        dividas.forEach(element =>{
                            soma = parseFloat(soma) + parseFloat(element.valor); 
                        })


                    console.log(soma)
                    total.innerHTML = `R$`+soma;
                    console.log(dividas)
           })

              
        $("#lista-clientes").click(function(){
                    $("#tela-inicial").slideToggle(500)
                    $(".lista-de-cadastrados").slideToggle(500)
                   
        })

        $("#voltar").click(function(){
            $("#tela-inicial").slideToggle(500)
            $(".lista-de-cadastrados").slideToggle(500)

        })
        

}


$(document).ready(function(){
    $(".tela-inicial").slideDown() 
    app()
    var remove = document.querySelectorAll(".excluir")
    remove.forEach(element => {
        element.addEventListener("click",()=>{
            alert("click")
        })
     })
 })
 

