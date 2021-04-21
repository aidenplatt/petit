import express from 'express';
import data from './data';

const app= express();

app.get("/api/products/:id", (req, res)=>{
    const productId=req.params.id;
    const product=data.products.find(x => x.id===productId);
    if(product) 
        res.send(product);
     else 
        res.status(404).send({msg: "Product Not Found."});
});

app.get("/api/products", (req, res)=>{
    res.send(data.products);
});


const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server started on: http://localhost:${PORT}`));
