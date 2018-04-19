'use strict';

var lbModel, modelName, modelNameCamel, modelNameCamelPlural;
var angularModel = new Object();
var modelFields = [];

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

var pluralize = require('pluralize');
var replaceall = require('replaceall');
var fs = require('fs');
var filename = process.argv[2];

generateModelObject(filename);
createModelFile();
createModuleFile();
createServiceFile();
createComponent();
createComponent('header');
createComponent('list');
createComponent('footer');
createComponent('edit');
createComponent('details');
createComponent('create');
updateAppModule();
updateRoutingModule();
updateMenuComponent();

function generateModelObject(filename) {
  var contents = fs.readFileSync(filename);
  lbModel = JSON.parse(contents);
  modelName = pluralize.singular(lbModel.name.toLowerCase());
  modelNameCamel = pluralize.singular(lbModel.name);
  modelNameCamelPlural = pluralize.plural(lbModel.name);

  if (lbModel.hasOwnProperty('properties')) {
    var properties = lbModel.properties;

    var fields = Object.keys(properties);
    fields.forEach(function(property) {
      modelFields.push(property);
      var items = Object.keys(properties[property]);
      var field = new Object();
      items.forEach(function(item) {
        if (item == 'type' || item == 'required' || item == 'id') {
          field[item] = properties[property][item];
        }
      });
      angularModel[property] = field;
    });
  }
}

function createModelFile() {
  var destinationPath = '../client/src/app/models/';
  checkAndCreateFolder(destinationPath);
  var content = 'export class ' + modelNameCamel + ' {\n';
  var fields = Object.keys(angularModel);
  fields.forEach(function(property) {
    var type = angularModel[property]['type'].toLowerCase();
    if (type == 'date') {
      type = 'string';
    }
    content += '  ' + property + ': ' + type + ';\n';
  });
  content += '\n';
  content += '  constructor(values: Object = {}) {\n';
  content += '    Object.assign(this, values);\n';
  content += '  }\n';
  content += '}\n';
  fs.writeFile(destinationPath + modelName + '.ts', content, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file ' + destinationPath + modelName + '.ts was saved!');
  });
}

function createModuleFile() {
  var destinationPath = '../client/src/app/modules/' + modelName + '/';
  checkAndCreateFolder(destinationPath);
  var stub = fs.readFileSync('./common/scaffolds/modules/module.ts.stub', 'utf8');
  stub = replaceall('$MODEL_NAME_CAMEL$', modelNameCamel, stub);
  stub = replaceall('$MODEL_NAME$', modelName, stub);
  fs.writeFile(destinationPath + modelName + '.module.ts', stub, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file ' + destinationPath + modelName + '/' + modelName + '.module.ts was saved!');
  });
}

function createServiceFile() {
  var destinationPath = '../client/src/app/services/' + modelName + '/';
  checkAndCreateFolder(destinationPath);
  var stub = fs.readFileSync('./common/scaffolds/services/service.ts.stub', 'utf8');
  stub = replaceall('$MODEL_NAME_CAMEL$', modelNameCamel, stub);
  stub = replaceall('$MODEL_NAME_CAMEL_PLURAL$', modelNameCamelPlural, stub);
  stub = replaceall('$MODEL_NAME$', modelName, stub);
  fs.writeFile(destinationPath + modelName + '.service.ts', stub, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file ' + destinationPath + modelName + '/' + modelName + '.service.ts was saved!');
  });
}

function createComponent(func) {
  var basePath = '';
  var destinationPath = '';
  if (func) {
    basePath = './common/scaffolds/components/' + func + '/' + func + '.component.';
    destinationPath = '../client/src/app/components/' + modelName + '/' + modelName + '-' + func + '/';
    checkAndCreateFolder(destinationPath);
    destinationPath += modelName + '-' + func;
  } else {
    basePath = './common/scaffolds/components/component.';
    destinationPath = '../client/src/app/components/' + modelName + '/';
    checkAndCreateFolder(destinationPath);
    destinationPath += modelName;
  }
  var stub = fs.readFileSync(basePath + 'ts.stub', 'utf8');
  stub = replaceall('$MODEL_NAME_CAMEL$', modelNameCamel, stub);
  stub = replaceall('$MODEL_NAME$', modelName, stub);
  if (func == 'list') {
    stub = replaceall('$MODEL_FIELDS$', '\'' + modelFields.join('\', \'') + '\'', stub);
  }
  fs.writeFile(destinationPath + '.component.ts', stub, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file ' + destinationPath + '.component.ts' + '.component.ts was saved!');
  });
  stub = fs.readFileSync(basePath + 'html.stub', 'utf8');
  stub = replaceall('$MODEL_NAME_CAMEL$', modelNameCamel, stub);
  stub = replaceall('$MODEL_NAME$', modelName, stub);
  if (func == 'list') {
    stub = replaceall('$MODEL_FIELDS_LIST$', createListItems(), stub);
  }
  if (func == 'create' || func == 'edit' || func == 'details') {
    stub = replaceall('$MODEL_FIELDS_' + func.toUpperCase() + '$', createFormItems(func), stub);
  }
  fs.writeFile(destinationPath + '.component.html', stub, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file ' + destinationPath + '.component.html was saved!');
  });
  fs.writeFile(destinationPath + '.component.css', '', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file ' + destinationPath + '.component.css was saved!');
  });
}

function createListItems() {
  var output = '';
  for (let index = 0; index < modelFields.length; index++) {
    var stub = fs.readFileSync('./common/scaffolds/html-snippets/listitem.html.stub', 'utf8');
    const element = modelFields[index];
    var snip = replaceall('$FIELD_NAME$', element, stub);
    snip = replaceall('$MODEL_NAME$', modelName, snip);
    output += snip;
    output += '\n';
  }
  return output;
}

function createFormItems(func) {
  var output = '';
  for (let index = 0; index < modelFields.length; index++) {
    var stub = fs.readFileSync('./common/scaffolds/html-snippets/' + func + 'formitem.html.stub', 'utf8');
    const element = modelFields[index];
    var snip = replaceall('$FIELD_NAME$', element, stub);
    snip = replaceall('$MODEL_NAME$', modelName, snip);
    if (isDisabled(element)) {
      snip = replaceall('$IS_DISABLED$', 'disabled', snip);
    } else {
      snip = replaceall('$IS_DISABLED$', '', snip);
    }
    output += snip;
    output += '\n';
  }
  return output;
}

function updateAppModule() {
  var appModule = fs.readFileSync('../client/src/app/app.module.ts', 'utf8');
  if (appModule.indexOf(modelNameCamel + 'Module') > -1) {
    return;
  } else {
    appModule = replaceall('/* imports end */', 'import { ' + modelNameCamel + 'Module } from \'./modules/' + modelName + '/' + modelName + '.module\';\n/* imports end */', appModule);
    appModule = replaceall('/* imports array end */', modelNameCamel + 'Module,\n    /* imports array end */', appModule);
    fs.writeFile('../client/src/app/app.module.ts', appModule, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('AppModule updated!');
    });
  }
}

function updateRoutingModule() {
  var routingModule = fs.readFileSync('../client/src/app/app.routing.module.ts', 'utf8');
  if (routingModule.indexOf(modelNameCamel + 'Component') > -1) {
    return;
  } else {
    var imports = fs.readFileSync('./common/scaffolds/modules/routing.module.imports.ts.stub', 'utf8');
    var routes = fs.readFileSync('./common/scaffolds/modules/routing.module.routes.ts.stub', 'utf8');
    imports = replaceall('$MODEL_NAME$', modelName, imports);
    imports = replaceall('$MODEL_NAME_CAMEL$', modelNameCamel, imports);
    routes = replaceall('$MODEL_NAME$', modelName, routes);
    routes = replaceall('$MODEL_NAME_CAMEL$', modelNameCamel, routes);
    routingModule = replaceall('/* imports end */', imports + '\n/* imports end */', routingModule);
    routingModule = replaceall('/* routes end */', routes + '\n    /* routes end */', routingModule);
    fs.writeFile('../client/src/app/app.routing.module.ts', routingModule, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('AppRoutingModule updated!');
    });
  }
}

function updateMenuComponent() {
  var menuComponent = fs.readFileSync('../client/src/app/menu.component.html', 'utf8');
  if (menuComponent.indexOf(modelName) > -1) {
    return;
  } else {
    menuComponent = replaceall('<!-- Own modules end -->', '<button mat-button routerLink="' + modelName + '">' + modelNameCamel + '</button>\n<!-- Own modules end -->', menuComponent);
    fs.writeFile('../client/src/app/menu.component.html', menuComponent, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('MenuComponent updated!');
    });
  }
}


function isDisabled(fieldName) {
  if (angularModel[fieldName]['id']) {
    return true;
  } else {
    return false;
  }
}

function checkAndCreateFolder(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
