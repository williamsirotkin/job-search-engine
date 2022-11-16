const express = require('express');

const app = express();
const PORT = 3001;
var cors = require('cors');
app.use(cors())

app.get('/fakeemail@gmail.com', (req, res)=>{
    res.status(200);
    res.send([
        "The Home Depot",
        "Delta Airlines",
        "Chick-fil-A"
    ]);
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);