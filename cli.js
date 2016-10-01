#!/usr/bin/env node

"use strict";

var fs = require('fs');

const command = {};

const args = process.argv;
const path = process.env.PWD;
args.splice(0,1);
args.splice(0,1);


const generateControllerTemplate = (args) => {
    let controllerName = '';
    let dependencies = [];
    let instancies = [];
    let setters = ``;

    if(!!args[1])
        controllerName = args[1];
    else {
        controllerName = 'Example';
        throw 'No file name';
    }

    for(var i = 2; i < args.length; i++) {
        const parts = args[i].split(':');

        let instanceName = '';
        let dependencieName = '';

        dependencieName = args[i].split(':')[0];

        if(!!parts[1]) {
            instanceName = parts[1];
        } else {
            instanceName = dependencieName;
        }

        dependencieName = `'${dependencieName}'`;

        dependencies.push(dependencieName);
        instancies.push(instanceName);

        setters += `        this.${instanceName} = ${instanceName}; \n`;

        console.log(instanceName, dependencieName);
    }

    const controllerTemplate =
`
class ${controllerName}Controller {
    constructor(${instancies}) {
${setters}
    }
}

${controllerName}Controller.$inject = [${dependencies}];

export default ${controllerName}Controller;
`
;

    return controllerTemplate;
};

if(args[0] === 'controller') {
    fs.writeFile(path + '/' + (args[1] + '.controller.js').toLowerCase(), generateControllerTemplate(args), (err) => {
        if(err)
            return console.log(err);

        console.log("Ok!");
    });
}
