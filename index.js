const express=require("express");
const app=express();

const connect=require("./database/mongoose");
const employee=require("./routes/employee");

const body_Parser=require("body-parser");
app.use(body_Parser.json());

app.use("/",employee);

app.listen(4000,async()=>{
    await connect();
    console.log("server is running on 4000...");
})