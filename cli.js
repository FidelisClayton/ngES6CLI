#!/usr/bin/env node

"use strict";

const controllerTemplate = require('./templates/controller.template');
const serviceTemplate = require('./templates/service.template');

var fs = require('fs');

const command = {};

const args = process.argv;
const path = process.env.PWD;
args.splice(0,1);
args.splice(0,1);

switch(args[0]) {
    case 'controller':
        fs.writeFile(path + '/' + (args[1] + '.controller.js').toLowerCase(), controllerTemplate(args), (err) => {
            if(err)
                return console.log(err);

            console.log(`Controller ${args[1]} created.`);
        });

        break;

    case 'service':
        fs.writeFile(path + '/' + (args[1] + '.service.js').toLowerCase(), serviceTemplate(args), (err) => {
            if(err)
                return console.log(err);

            console.log(`Service ${args[1]} created.`);
        });

        break;
}
