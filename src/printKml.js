var fs = require('fs');
var join = require('path').join
module.exports = printKml;


//scenario can be: 'worstCase', 'bestCase', 'averageCase'
function printKml (kml, scenario, id, outputPath, callback){

  fs.mkdir(outputPath, '777', onDirCreate);

  function onDirCreate(err){

    writeFile();

  }
  function writeFile(scenario){
    var filePath = join(outputPath, 'output_'+ id + '-' + scenario +'.kml');
    fs.writeFile(filePath, kml, {encoding:'utf8', mode: 0644}, onFileWrite);
  }

  function onFileWrite(err) {
    if (err) {
      callback (err);
    } else {
      callback(null);
    }
  }

};

