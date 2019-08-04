const WebSocket = require('ws');
const port = 81;

const ws = new WebSocket(`ws://localhost:${port}/`);

ws.on('open', function open() {
    ws.send('healthcheck');
    ws.close()
});
