var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.postgres;

var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
dataSource.automigrate(lbTables, function (er) {
    if (er) throw er;
    console.log('Loopback tables [' + lbTables + '] created in ', dataSource.adapter.name);
    dataSource.disconnect();
});