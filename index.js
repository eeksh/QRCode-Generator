import express from "express";
import QRCode from "qrcode";

const app=express();
const port=3000;

app.get("/qr",async(req,res)=>{
    const text=req.query.text;
    if(!text){
        res.status(400).send("please enter string")
    }

    const qrImage=await QRCode.toDataURL(text);
    const qrImageData=qrImage.replace(/^data:image\/png;base64,/,"");
    res.setHeader("content-Type","image/png");
    res.send(Buffer.from(qrImageData,"base64"));
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
