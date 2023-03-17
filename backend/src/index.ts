import express from "express"

const app = express()

app.get("/",function(req,res){
    res.send("Estamos por aqui")
})

app.listen(3333, () => console.log("Servidor rodando na porta 3333"))
