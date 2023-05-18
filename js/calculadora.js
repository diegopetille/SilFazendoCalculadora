var botao_calc = document.querySelector("#calcular-produtos");
let table = document.querySelector("#tabela_insumos");

botao_calc.addEventListener("click", function(event){
    event.preventDefault();

    total();


});

//total com itens da tabela 
function total() {
  let valorTotal = 0;
  const linhasTabela = table.getElementsByTagName("tr");
 
  for (let i = 1; i < linhasTabela.length; i++) {
    var linha = linhasTabela[i]
    var celulas = linha.getElementsByTagName('td');
    var quantidadeInsumo = parseFloat(celulas[1].textContent);
    var quantidadeEmbalagem = parseFloat(celulas[2].textContent)
    var valorInsumo = parseFloat((celulas[3].textContent).replace("R$", "").replace(".", "").replace(",", "."));

    var totalLinha = (valorInsumo/quantidadeEmbalagem)*quantidadeInsumo;

    valorTotal = valorTotal + totalLinha;
  }

  var porcentagem = document.getElementById('porcentagem').value.replace("%", "");
  

  var taxa = ((valorTotal/100) * porcentagem);
  var valorFinal = valorTotal + taxa;
  valorFinal =  Math.round(valorFinal * 2) / 2 ;
  
  document.getElementById('resprod').value = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById('resfinal').value = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
 }


/*// Função para coletar as informações do formulário
function GetInfo() {
    // Obtendo os valores da tabela
    const quantidadeInsumo = parseFloat(document.getElementById('Quantidade_ins').value);
    const quantidadeEmbalagem = parseFloat(document.getElementById('Quantidade_emb').value);
    const valorInsumo = parseFloat(document.getElementById('Valor_ins').value);
    const porcentagemLucro = parseFloat(document.getElementById('Lucro').value);
  
    // Retornando um objeto com as informações coletadas
    return {
      quantidadeInsumo,
      quantidadeEmbalagem,
      valorInsumo,
      porcentagemLucro
    };
  }


function calculoInsumo(info){
const valorIndividual = (info.valorInsumo)/(info.quantidadeEmbalagem);
const valorUsado = (valorIndividual)*(info.quantidadeInsumo);

const custoProducao = valorUsado;

const lucro = ((info.porcentagemLucro / 100)*(custoProducao));

const valorFinal = ((custoProducao)+(lucro)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

return{
    valorIndividual,
    valorUsado,
    custoProducao,
    lucro,
    valorFinal
    };
}
 
/*

//total sem item da tabela 
function total() {
  let valorTotal = 0;
  
  const linhasTabela = table.getElementsByTagName("tr");
  
  for (let i = 1; i < linhasTabela.length; i++) {
    const valorFinalCell = linhasTabela[i].querySelector(".valor-final");
    if (valorFinalCell) {
      const valorFinal = valorFinalCell.textContent;
      valorTotal += parseFloat(valorFinal.replace("R$", "").replace(".", "").replace(",", "."));
    }
  }
  
  console.log("Valor Total: ", valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}
  */


