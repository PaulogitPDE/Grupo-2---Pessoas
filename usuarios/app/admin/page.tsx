'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomGrafico } from "@/components/CustomGrafico/CustomGrafico";
import { useState } from "react";
import { CustomButtonNotification } from "@/components/CustomButtonNotification/CustomButtonNotification";
import { CustomCardAcesso } from "@/components/CustomCardAcesso/CustomCardAcesso";

export default function admin() {

  return (
    <>
        <h1 style={{justifySelf: "center", color: "var(--cor-verde-petroleo)"}}>Bem vindo!</h1>
        <CustomContainer BackgroundColor="#348888" >
           <CustomContainer >
                <div className='d-flex flex-row'>
                    <div>
                        <CustomGrafico
                            atendidos={400}
                            naoAtendidos={54}
                        />
                    </div>

                <div style={{width:"20vw", margin:"20px"}}></div>
                    <table>
                        <tbody>
                            <tr>
                                <td >
                                    <CustomButtonNotification
                                        text="Resgate de Animal"
                                        value={0}  
                                />
                                </td>
                                <td >
                                    <CustomButtonNotification
                                        text="Cadastro de Animal"
                                        value={20}  
                                />
                                </td>
                            
                            </tr>
                            <tr>
                                
                            <td>
                                <CustomButtonNotification 
                                text="Banco de Ração"
                                value={2}
                                /> 
                            </td>
                            <td>
                                <CustomButtonNotification
                                text="Gestão de pessoas"
                                value={32}
                                />
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CustomContainer>
                <h1 style={{ textAlign: "center", color: "var(--cor-ciano-claro)" }}>Acesse!</h1>     
            <CustomContainer>
                <h2 style={{ textAlign:"center", color:"var(--cor-verde-petroleo)"}}>Gestão de Pessoas</h2>

                <div className="d-flex gap-4 flex-wrap justify-content-center" style={{margin:"20px"}}>
                    <CustomCardAcesso
                        titulo="Case de Sucesso"
                        imagem="/img/case-sucesso.png"
                        rota="/CaseSucesso"
                    />

                    <CustomCardAcesso
                        titulo="Gerenciar Pessoas"
                        imagem="/img/gerenciar-pessoas.png"
                        rota="/GerenciarUser"
                    />
                </div>
                <br/>
                <h2 style={{ textAlign:"center", color:"var(--cor-verde-petroleo)"}}>Resgate de Animal</h2>

                <div className="d-flex gap-4 flex-wrap justify-content-center" style={{margin:"20px"}}>
                    <CustomCardAcesso
                        titulo="Novo Resgate"
                        imagem="/img/NovoResgate.png"
                        rota="/"
                    />

                    <CustomCardAcesso
                        titulo="Consultar Resgates"
                        imagem="/img/ConsultarResgates.png"
                        rota="/"
                    />
                    <CustomCardAcesso
                        titulo="Histórico"
                        imagem="/img/Histórico.png"
                        rota="/"
                    />
                </div>
                
                <h2 style={{ textAlign:"center", color:"var(--cor-verde-petroleo)"}}>Cadastro de Animais</h2>

                <div className="d-flex gap-4 flex-wrap justify-content-center" style={{margin:"20px"}}>
                    <CustomCardAcesso
                        titulo="Cadastro de Animais"
                        imagem="/img/CadastroAnimais.png"
                        rota="/"
                    />

                    <CustomCardAcesso
                        titulo="Lista de Animais"
                        imagem="/img/ListaAnimais.png"
                        rota="/"
                    />
                    <CustomCardAcesso
                        titulo="Adotantes"
                        imagem="/img/Adotantes.png"
                        rota="/"
                    />
                    <CustomCardAcesso
                        titulo="Adestradores"
                        imagem="/img/Adestradores.png"
                        rota="/"
                    />
                </div>

                <h2 style={{ textAlign:"center", color:"var(--cor-verde-petroleo)"}}>Banco de Ração</h2>

                <div className="d-flex gap-4 flex-wrap justify-content-center" style={{margin:"20px"}}>
                    <CustomCardAcesso
                        titulo="Agendamentos"
                        imagem="/img/Agendamentos.png"
                        rota="/"
                    />

                    <CustomCardAcesso
                        titulo="Solicitação de Ração"
                        imagem="/img/SolicitacaoRacao.png"
                        rota="/"
                    />
                    <CustomCardAcesso
                        titulo="Estoque"
                        imagem="/img/Estoque.png"
                        rota="/"
                    />
                    <CustomCardAcesso
                        titulo="Cadastro de Ração"
                        imagem="/img/CadastroRacao.png"
                        rota="/"
                    />
                </div>

                </CustomContainer>
        </CustomContainer>
    </>
  );
}