let csvToJson = require("convert-csv-to-json");

let fileInputName = "Studenten_Mock_Data.csv";
let fileOutputName = "data.json";

csvToJson.fieldDelimiter(",").getJsonFromCsv(fileInputName);
csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
