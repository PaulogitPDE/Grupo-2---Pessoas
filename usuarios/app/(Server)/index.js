const express = required('express');

const cors = require('cors');
const {sql, Conectar } = require("./database.js");

const app = express();

const port = 3010;

app.use(cors());

app.post('/cadPF', async (req, res) => {
    try {
        nome = req.body.nome;
        cpf= req.body.cpf;
        dataNasc = req.body.dataNasc;
        telefone = req.body.telefone;
        email = req.body.email;
        senha = req.body.senha;
        cep = req.body.cep;
        endereco = req.body.endereco;
        numero = req.body.numero;
        bairro = req.body.bairro;
        estado = req.body.estado;
        cidade = req.body.cidade;
        complemento = req.body.complemento;
        
        const cn = await Conectar();

        const campo = cn.request()
        .input("nome", sql.VarChar(100), nome)
        .input("cpf", sql.VarChar(100), cpf)
        .input("dataNasc", sql.VarChar(100), dataNasc)
        .input("telefone", sql.VarChar(100), telefone)
        .input("email", sql.VarChar(100), email)
        .input("senha", sql.VarChar(100), senha)
        .input("cep", sql.VarChar(100), cep)
        .input("endereco", sql.VarChar(100), endereco)
        .input("numero", sql.VarChar(100), numero)
        .input("bairro", sql.VarChar(100), bairro)
        .input("estado", sql.VarChar(100), estado)
        .input("cidade", sql.VarChar(100), cidade)
        .input("complemento", sql.VarChar(100), complemento)
    }
})