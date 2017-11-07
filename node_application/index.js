const WebSocket = require('ws');
const Docker = require('dockerode');
const port = 81;

const docker = new Docker({socketPath: '/var/run/docker.sock'});

console.log(docker);

const wss = new WebSocket.Server({ port: port });

var raw_code = '!code Area!';

wss.on('connection', function connection(ws) {
    console.log('received: connection');
    ws.on('message', function incoming(message) {
        console.log('received raw: %s', message);

        var obj;
        try {
            obj = JSON.parse(message)
        } catch (e) {
            console.log('Error: ' + e);
            return
        }
        if (obj.hasOwnProperty('raw_code')) {
            raw_code = obj.raw_code;
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({raw_code: raw_code}));
                }
            });
        }
        if(obj.hasOwnProperty('message')){
            console.log('received: %s', obj.message);
        }
        // if(message === 'run'){
        //     docker.run('ubuntu', ['bash', '-c', 'uname -a'], process.stdout, function (err, data, container) {
        //         console.log('sas' + container);
        //     });
        // }
    });
    ws.send(JSON.stringify({raw_code: raw_code}));
});
