const express = require('express');
const fs = require('fs');
const app = express();

// Read server.json to get configuration
const config = JSON.parse(fs.readFileSync('server.json', 'utf8'));

// Use port from server.json
const port = config.port;

app.get('/', (req, res) => {
    res.send('Hello World');
    });

    app.listen(port, () => {
    console.log(`Server is running on http://${config.host}:${port}`);
});
