const { WebSocketServer } = require('ws')

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (ws) => {
  ws.send('Gutentag, World!')
  ws.on('close', () => {})
})

console.log('WebSocket server running on ws://localhost:8080')
