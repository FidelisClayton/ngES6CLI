'use strict';

const template = (args) => {
    let serviceName = '';
    let setters = ``;
    let instancies = [];
    let dependencies = [];

    if(!!args[1])
        serviceName = args[1];
    else
        serviceName = 'example';

    args.map((arg, i) => {
        if(i >= 2) {
            const parts = arg.split(':');
            let instancename = '';
            let dependenciename = '';

            dependenciename = parts[0];

            if(!!parts[1]) {
                instancename = parts[1]
            } else {
                instancename = dependenciename;
            }

            dependenciename = `'${dependenciename}'`;

            dependencies.push(dependenciename);
            instancies.push(instancename);

            setters += `        this.${instancename} = ${instancename}; \n`;
        }
    });

    const serviceTemplate = 
`class ${serviceName}Service {
    constructor(${instancies}) {
${setters}
    }
}

${serviceName}Service.$inject = [${dependencies}];

export default ${serviceName}Service;
`;

    return serviceTemplate;
}

module.exports = template;
