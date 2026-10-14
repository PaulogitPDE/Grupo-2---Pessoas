const express = required('express');

const cors = require('cors');
const {sql, Conectar } = require("./database.js");

const app = express();

const port = 3010;

app.use(cors());

app.post('/cadPessoas', async (req, res) => {
    try {
        nome = req.body.nome;
        cpf= req.body.cpf;
        dataNasc = req.body.dataNasc;
        razaoSocial= req.body.razaoSocial;
        nomeFantasia= req.body.nomeFantasia;
        cnpj= req.body.cnpj;
        telefone= req.body.telefone;
        email= req.body.email;
        senha= req.body.senha;
        cep = req.body.cep;
        endereco= req.body.endereco;
        numero= req.body.numero;
        bairro= req.body.bairro;
        estado= req.body.estado;
        cidade= req.body.cidade;
        complemento= req.body.complemento; 
    }
})