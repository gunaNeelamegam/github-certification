const express = require("express");

app = express()

app.use(express.json())

app.get("/",(req,res) => {
    return  res.status(200).json(
        {
            status : true,
            name : "guna"
        }
    );
});

app.listen(5000,()=>{
    console.log("Server Start's");
});