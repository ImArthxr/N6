import express from "express"
import { getAll, findByKey, create } from "./database/index.js"
import Tarefa from "./models/tarefa.js"
import Usuario from "./models/usuario.js"
import Cliente from "./models/cliente.js"
import cors from 'cors'

const app = express()
const port = 3000
app.use(express.json())
app.use(cors()) // permitir acesso de todos

app.get('/tarefas',(req,res) =>{
    const tarefas = getAll('tarefas')
    res.json(tarefas)
})

app.get('/usuarios',(req,res)=>{
    const usuarios = getAll('usuarios')
    res.json(usuarios)
})

app.get('/clientes',(req,res)=>{
    const clientes = getAll('clientes')
    res.json(clientes)
})

app.post('/tarefas',(req,res) => {
    const {id, titulo} = req.body
    const tarefa = new Tarefa(id, titulo)
    create(tarefa,'tarefas')
    res.json(tarefa)
})

app.post('/usuarios',(req,res) => {
    const {id, nome, email} = req.body
    const usuario = new Usuario(id, nome, email)
    create(usuario,'usuarios')
    res.json(usuario)
})

app.post('/clientes',(req,res) => {
    const {id, nome, cnpj} = req.body
    const cliente = new Cliente(id, nome, cnpj)
    create(cliente,'clientes')
    res.json(cliente)
})

app.listen(port, () => {
    console.log(`Servidor executando em 
    http://localhost:${port}`)
})