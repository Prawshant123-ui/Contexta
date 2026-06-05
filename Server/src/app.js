const express=require('express')
const cors=require('cors')
const docRoute=require("./routes/docRoute")
const healthRoute=require("./routes/healthRoute")

const app=express()


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Api is working')
})

app.use("/api/health", healthRoute);
app.use("/api/documents", docRoute);

module.exports = app;