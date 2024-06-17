import Cliente from "../models/cliente.js"
import Tarefa from "../models/tarefa.js"
import Usuario from "../models/usuario.js"

export const db = {
    tarefas: [
        new Tarefa(1,"Tarefa 1"),
        new Tarefa(2, "Tarefa 2")
    ],
    usuarios: [
        new Usuario(1,"Nome do user","email@email.com"),
        new Usuario(2,"Nome do user 2", "email2@email.com")
    ],
    clientes: [
        new Cliente(1,"Cliente 1","433.456788.234/0001-0")
    ]
}

export function getAll(tabela){
    return db[tabela]
}

export function findByKey(key, tabela){
    return db[tabela][key]
}

export function create(objeto, tabela){
    db[tabela].push(objeto)
}

