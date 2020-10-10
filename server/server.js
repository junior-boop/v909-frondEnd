const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('api')
})

app.listen(3000, ()=> {
    console.log('server connecter')
})