var aspose = aspose || {};
// obtenha os módulos aspose.cells em seu projeto Node.js.
aspose.cells = require("aspose.cells");
 var json = '[{"student-id":1,"marks":1134},{"student-id":2,"marks":547},{"student-id":3,"marks":1703},{"student-id":4,"marks":-199},{"student-id":5,"marks":-306},{"student-id":6,"marks":-49},{"student-id":7,"marks":1527},{"student-id":8,"marks":1223}]'
// Inicialize um objeto da classe Workbook.
var workbook = aspose.cells.Workbook()
// Chame o método get para acessar a planilha vazia padrão.
var worksheet = workbook.getWorksheets().get(0)
// Instancie uma instância da classe JsonLayoutOptions para formatação.
var layoutOptions = aspose.cells.JsonLayoutOptions()
// O método setArrayAsTable processa Array como uma tabela.
layoutOptions.setArrayAsTable(true)
// Importe dados JSON para a planilha padrão chamando o método importData.
aspose.cells.JsonUtility.importData(json, worksheet.getCells(), 0, 0, layoutOptions)
// Invoque o método save para salvar o arquivo resultante.
workbook.save("result.xls", aspose.cells.SaveFormat.AUTO)