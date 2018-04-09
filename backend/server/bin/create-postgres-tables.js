var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.postgres;

dataSource.discoverModelDefinitions({ views: true, schema: 'public' }, function (err, tables) {
    var modelConfigPath = path.resolve(__dirname, '../model-config.json');

    fs.readFile(modelConfigPath, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            modelConfig = JSON.parse(data);
            for (var i = tables.length - 1; i >= 0; i--) {
                dataSource.discoverSchema(tables[i].name, { schema: 'public', relations: true }, function (err, table) {
                    if (table) {
                        console.log("Auto discovery success: " + table.name);

                        var outputName = outputPath + '/' + table.name + '.json';

                        modelConfig[table.name] = { dataSource: "postgres", public: true };

                        fs.writeFile(outputName, JSON.stringify(table, null, 2), function (err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("JSON saved to " + outputName);
                                fs.writeFile(modelConfigPath, JSON.stringify(modelConfig, null, "\t"), function (err) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log(modelConfigPath + " updated.");
                                    }
                                });
                            }
                        });
                    }
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
            }
        }
    });
});
