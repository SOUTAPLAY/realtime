const WebSocket = require('wss');

const wss = new WebSocket.Server({ server }); // ポート番号を確認

wss.on('connection', function connection(wss) {
    console.log('Client connected'); // ここで接続を確認
    ws.on('message', function incoming(message) {
        console.log('Received:', message);
        // 全クライアントにメッセージをブロードキャスト
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', function () {
        console.log('Client disconnected');
    });
});
