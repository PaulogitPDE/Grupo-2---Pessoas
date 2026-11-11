const express = require('express');

const cors = require('cors');

const { sql, Conectar } = require('./database.js');

const port = 3010;

const app = express();

app.use(express.json());

app.use(cors());

app.post('/cadPF', async (req, res) => {
    try {
        const nome = req.body.nome;
        const cpf = req.body.cpf;
        const dataNasc = req.body.dataNasc;
        const telefone = req.body.telefone;
        const email = req.body.email;
        const senha = req.body.senha;
        const cep = req.body.cep;
        const endereco = req.body.endereco;
        const numero = req.body.numero;
        const bairro = req.body.bairro;
        const estado = req.body.estado;
        const cidade = req.body.cidade;
        const complemento = req.body.complemento;
        const tipoPessoa = req.body.tipoPessoa;

        const cn = await Conectar();
        const campo = await cn.request()
            .input("nome", sql.VarChar(100), nome)
            .input("cpf", sql.VarChar(18), cpf)
            .input("tipoPessoa", sql.Char(1), tipoPessoa)
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

                DECLARE @idUsuario INT;

                INSERT INTO USUARIO(
                    nome,
                    email,
                    telefone,
                    senha,
                    cpf_cnpj,
                    data_nasc
                )
                OUTPUT INSERTED.*
                VALUES(
                    @nome,
                    @email,
                    @telefone,
                    @senha,
                    @cpf,
                    @dataNasc
                );

                SET @idUsuario = SCOPE_IDENTITY();
                
                INSERT INTO ENDERECO(
                    id_usuario,
                    cep,
                    logradouro,
                    numero,
                    complemento,
                    bairro,
                    cidade,
                    uf
                ) 
                OUTPUT INSERTED.*
                VALUES(
                    @idUsuario,
                    @cep,
                    @endereco,
                    @numero,
                    @complemento,
                    @bairro,
                    @cidade,
                    @estado
                );
                `
            )

        res.status(201).json({
            "MS": "CADASTRADO",
            "campos": campo.recordset[0]
        })
    }
    catch (e) {
        res.status(500).json({
            "erro": e.message
        })
    }
})

app.listen(port, () => {
  console.log(`servidor http://localhost:${port}`);
})