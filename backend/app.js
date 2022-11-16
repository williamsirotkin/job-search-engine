const express = require('express');

const app = express();
const PORT = 3001;
var cors = require('cors');
app.use(cors())

app.get('/email/:email', (req, res)=>{
    res.status(200);
    console.log(res);
    res.send([
        "The Home Depot",
        "Delta Airlines",
        req.protocol + '://' + req.get('host') + req.originalUrl
    ]);
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

