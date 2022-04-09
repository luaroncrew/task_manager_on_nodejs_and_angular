const express = require('express');
const app = express();

/* ROUTE HANDLERS */

const port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.send(`hello, world`);
})