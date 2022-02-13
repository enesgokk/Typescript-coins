const express=require("express");
const cors=require("cors");
const app=express();


app.use(cors());

app.get("/", (req,res)=>{
    res.json({
        author:"Enes Gok",
        message:"5000 are working"
    })
})

app.listen(5000,()=>{
    console.log("@enesgokk")
});