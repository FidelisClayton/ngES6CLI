'use strict';

const template = (args) => {
    let controllerName = '';
    let setters = ``;
    let instancies = [];
    let dependencies = [];

    if(!!args[1])
        controllerName = args[1];
    else
        controllerName = 'example';

    args.map((arg, i) => {
        if(i >= 2) {
            const parts = arg.split(':');
            let instanceName = '';
            let dependencieName = '';

            dependencieName = parts[0];

            if(!!parts[1]) {
                instanceName = parts[1]
            } else {
                instanceName = dependencieName;
            }

            dependencieName = `'${dependenciename}'`;

            dependencies.push(dependencieName);
            instancies.push(instanceName);

            setters += `        this.${instanceName} = ${instancename}; \n`;
        }
    });

    const controllerTemplate = 
`class ${controllerName}controller {
    constructor(${instancies}) {
${setters}
    }
}

${controllerName}controller.$inject = [${dependencies}];

export default ${controllerName}controller;
`;

    return controllerTemplate;
}

module.exports = template;
