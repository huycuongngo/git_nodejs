
const express = require('express');
const app = express();
const port = 3000;
 
app.get('/home', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    console.log(c);
    
    res.send('Hello world!. This is home page');
});

app.listen(port, () => {
    console.log(`Example app listening at http://locolhost:${port}`);
});












