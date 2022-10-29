var aspose = aspose || {};
aspose.cells = require("aspose.cells");

module.exports = function PlaniLhaForjson(jsonItem, diretorio, name){
    var workbook = aspose.cells.Workbook()
    var worksheet = workbook.getWorksheets().get(0)
    var layoutOptions = aspose.cells.JsonLayoutOptions()
    layoutOptions.setArrayAsTable(true)
    aspose.cells.JsonUtility.importData(JSON.stringify(jsonItem), worksheet.getCells(), 0, 0, layoutOptions)
    workbook.save(`${diretorio}/${name}.xls`, aspose.cells.SaveFormat.AUTO)
}