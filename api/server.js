// server.js
const FakeServer = require('fake-json-api-server/src/nodeServer');

new FakeServer({
    port: 3000,
    baseApiUrl: '/api/',
    resources: {
        tag: {
            data: [{
                type: 'tag',
                id: '1',
                attributes: {title: 'Tag 1'}},
            {
                type: 'tag',
                id: '2',
                attributes: {title: 'Tag 2'}
            }]
        }
    }
});