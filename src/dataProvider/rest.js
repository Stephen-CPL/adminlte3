import simpleRestProvider from 'ra-data-simple-rest';

const restProvider = simpleRestProvider('http://localhost:4000');
//const restProvider = simpleRestProvider('https://my-json-server.typicode.com/Stephen-CPL/json_demo_data');
//const restProvider = simpleRestProvider('https://20154.vm-55759eb3c090d834942e2d0c8.silisky.com');

export default (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(() => resolve(restProvider(type, resource, params)), 500)
    );
