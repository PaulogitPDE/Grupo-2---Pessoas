const express = require('express');

const cors = require('cors');

const { sql, Conectar } = require('./database.js');

const app = express();

app.use(express.json());

app.use(cors());



app.post('/cadPF', async (req, res) => {
    try {
        nome = req.body.nome;
        cpf = req.body.cpf;
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
            .input("cpf", sql.VarChar(18), cpf)
            .input("dataNasc", sql.Date, dataNasc)
            .input("telefone", sql.VarChar(20), telefone)
            .input("email", sql.VarChar(100), email)
            .input("senha", sql.VarChar(255), senha)
            .input("cep", sql.VarChar(10), cep)
            .input("endereco", sql.VarChar(120), endereco)
            .input("numero", sql.VarChar(10), numero)
            .input("bairro", sql.VarChar(60), bairro)
            .input("estado", sql.Char(2), estado)
            .input("cidade", sql.VarChar(60), cidade)
            .input("complemento", sql.VarChar(60), complemento)
            .query(
                `
                INSERT INTO USUARIO(
                    nome,
                    email,
                    telefone,
                    senha,
                    cpf_cnpj,
                    data_nasc
                ) 
                OUTPUT INSERTED.*
                ADD(
                    @nome,
                    @cpf
                    @dataNasc
                    @telefone
                    @email
                    @senha
                );
                
                INSERT INTO ENDERECO(
                    cep,
                    logradouro,
                    numero,
                    complemento,
                    bairro,
                    cidade,
                    uf
                ) 
                OUTPUT INSERTED.*
                ADD(
                    @cep
                    @endereco
                    @numero
                    @bairro
                    @estado
                    @cidade
                    @complemento
                )`
            )

        res.status(201).json({
            "MS": "CADASTRADO",
            "campos": campo.recordset[0]
        })
    }
    catch (e) {
        alert("Deu errado sabagaça")
    }
})

