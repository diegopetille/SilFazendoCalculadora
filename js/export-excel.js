function exportToExcel() {
    var table = document.getElementById("tabela_insumos");
  
    // Create a new table to hold the additional value
    var newTable = document.createElement("table");
    var newRow = document.createElement("tr");
  
    // Create new cell with the final value
    var tableCell = document.createElement("th");
    tableCell.innerText = "\n"+ "Custo de producao = " + document.getElementById("resprod").value + "\n" + "Valor Final = " + document.getElementById("resfinal").value;
    newRow.appendChild(tableCell);
  
    newTable.appendChild(newRow);
  
    // Merge the original table and the new table into a single HTML string
    var html = table.outerHTML + newTable.outerHTML;
    var blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    var url = URL.createObjectURL(blob);
  
    var a = document.createElement("a");
    a.href = url;
    a.download = "table_data.xls";
    a.click();
  
    URL.revokeObjectURL(url);
  }
  