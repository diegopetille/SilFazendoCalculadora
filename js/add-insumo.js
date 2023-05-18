
// Obtendo referência para o botão "Adicionar Insumo"
const adicionarInsumoBtn = document.getElementById('adicionarInsumo');

var form = document.querySelector(".form_calc");

// Obtendo referência para a tabela
const tabela = document.getElementById('tabela_insumos');

adicionarInsumoBtn.addEventListener("click", function(event){
    event.preventDefault();

    const info = GetInfo(form);

    adicionaEncomendaNaTabela(info);

    disablefields(form);

    //limpa o formulário
    //form.reset();
    resetfields(form);


})

function disablefields(form){
    document.getElementById('Nome_prod').disabled = true;
    document.getElementById('Lucro').disabled = true;
}

function resetfields(form){
    document.getElementById('Nome_ins').value = "";
    document.getElementById('Quantidade_ins').value = "";
    document.getElementById('Quantidade_emb').value = "";
    document.getElementById('Valor_ins').value = "";
}

// Função para coletar as informações do formulário
function GetInfo(form) {
    // Obtendo os valores dos campos do formulário
    var produto = {
    nomeProduto : document.getElementById('Nome_prod').value,
    nomeInsumo : document.getElementById('Nome_ins').value,
    quantidadeInsumo : parseFloat(document.getElementById('Quantidade_ins').value),
    quantidadeEmbalagem : parseFloat(document.getElementById('Quantidade_emb').value),
    valorInsumo : parseFloat(document.getElementById('Valor_ins').value),
    porcentagemLucro : parseFloat(document.getElementById('Lucro').value),
}
    // Retornando um objeto com as informações coletadas
    return produto ;
  }

  function addtext(produto){
    document.getElementById('Nome').value = produto.nomeProduto;
    document.getElementById('porcentagem').value = (produto.porcentagemLucro + "%");

    console.log("aaaaaa");

  }

  function montaTr(produto){ //cria e monta linhas

    var encomendaTr = document.createElement("tr");
  
    //monta nova linha
    encomendaTr.appendChild(montaTd(produto.nomeInsumo));
    encomendaTr.appendChild(montaTd(produto.quantidadeInsumo));
    encomendaTr.appendChild(montaTd(produto.quantidadeEmbalagem));
    encomendaTr.appendChild(montaTd(produto.valorInsumo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })));
  
    return encomendaTr;
  
  }
  
  function montaTd(dados){ //metodo exclusivo para criar colunas
    var td = document.createElement("td");
    td.textContent = dados;
  
    return td;
  }

  //função add encomendas na tabela
function adicionaEncomendaNaTabela(produto){
    var encomendaTr = montaTr(produto);
    var tabela = document.getElementById('tabela_insumos');
    tabela.appendChild(encomendaTr);
    addtext(produto);
  }