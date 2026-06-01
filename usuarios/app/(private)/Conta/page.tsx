'use client';
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomContainerProfile } from "@/components/CustomContainerProfile/CustomContainerProfile";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomInputEdit } from "@/components/CustomInputEdit/CustomInputEdit";
import { CustomInputSearch } from "@/components/CustomInputSearch/CustomInputSearch";
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";
import { CustomProfilePicture } from "@/components/CustomProfilePicture/CustomProfilePicture";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";
import { CustomTextArea } from "@/components/CustomTextArea/CustomTextArea";
import { useFormik, FormikProvider } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from 'yup';

import sim from '@/app/(public)/Esq_senha/page'
import { CustomContainerAdocao } from "@/components/CustomContainerAdocao/CustomContainerAdocao";

export default function Conta(){

    const opcoes = [
        {id: "1", value: "Cachorro", label: "Cachorro"},
        {id: "2", value: "Gato", label: "Gato"},
        {id: "3", value: "Peixe", label: "Peixe"},
        {id: "4", value: "Pássaro", label: "Pássaro"},
        {id: "5", value: "Hamster", label: "Hamster"},
        {id: "6", value: "Porquinho da Índia", label: "Porquinho da Índia"},
        {id: "7", value: "Saruê", label: "Saruê"},
    ]

    

    const formik = useFormik({
        initialValues: {
            nomePerfil: "",
            animalFavorito: ""
        },        
 
        onSubmit: () => {}
    });

    

    const [nomePerfil, setNomePerfil] = useState <string>();

    const router = useRouter();

    const opcoesUF = [
        {id: "1", value: "Acre", label: "AC"},
        {id: "2", value: "Alagoas", label: "AL"},
        {id: "3", value: "Amazonas", label: "AM"},
        {id: "4", value: "Bahia", label: "BA"},
        {id: "5", value: "Ceara", label: "CE"},
        {id: "6", value: "Distrito Federal", label: "DF"},
        {id: "7", value: "Espirito Santo", label: "ES"},
        {id: "8", value: "Goias", label: "GO"},
        {id: "9", value: "Maranhao", label: "MA"},
        {id: "10", value: "Mato-Grosso", label: "MT"},
        {id: "11", value: "Mato-Grosso-Sul", label: "MS"},
        {id: "12", value: "Minas-Gerais", label: "MG"},
        {id: "13", value: "Para", label: "PA"},
        {id: "14", value: "Paraiba", label: "PB"},
        {id: "15", value: "Parana", label: "PR"},
        {id: "16", value: "Pernambuco", label: "PE"},
        {id: "17", value: "Piaui", label: "PI"},
        {id: "18", value: "Rio-de-Janeiro", label: "RJ"},
        {id: "19", value: "Rio-Grande-Norte", label: "RN"},
        {id: "20", value: "Rio-Grande-Sul", label: "RS"},
        {id: "21", value: "Rondonia", label: "RO"},
        {id: "22", value: "Roraima", label: "RR"},
        {id: "23", value: "Santa-Catarina", label: "SC"},
        {id: "24", value: "Sao-Paulo", label: "SP"},
        {id: "25", value: "Sergipe", label: "SE"},
        {id: "26", value: "Tocantins", label: "TO"}
    ]

    return(
        <>
            <h1 style={{justifySelf: "center", color: "#348888"}}>Seu Perfil</h1>
            <FormikProvider value={formik}>
                <form>
                    <CustomContainerProfile title="Perfil">
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                            <CustomInputEdit
                                label="Nome completo"
                                type="text"
                                name="nomePerfil"
                            ></CustomInputEdit>
                            <CustomTextArea label="Descrição" />
                            <CustomSelect name="animalFavorito" label="Qual o seu animal favorito?" options={opcoes} ></CustomSelect>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                            <CustomProfilePicture></CustomProfilePicture>
                        </div>
                
                    </CustomContainerProfile>

                    <CustomContainerAdocao title="Adoção">
                        <h2>Gostaria de adotar um animal?</h2>
                        <p style={{fontSize: "20px"}}>Realize já o formulário de adoção para provar que é apto(a) para adotar e cuidar de um animalzinho!</p>
                        <p style={{fontSize: "20px"}}>Neste bloco, você poderá observar o progresso do processo de adoção!</p>
                        <CustomButton title="Formulário de Adoção" type="button" onClick={() => router.push('/Form_Adocao')} />
                    </CustomContainerAdocao>

                    <CustomContainerProfile title="Dados Pessoais">
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                            <CustomInput 
                                type="text" 
                                label="E-mail" 
                                name="email"/>

                            <div style={{display: "flex", gap: "10%"}}>
                                <CustomInputView label="Senha" name="senhaConta" value="***********"/>
                                <CustomButton title="Redefinir Senha" type='button' name="redefSenhaConta" onClick={() => router.push('/Esq_senha')}/>
                            </div>
                        </div>
                        
                        <div>
                            <CustomInputSearch 
                                label="CEP" 
                                name="cep" />
                            <table style={{width: "100%"}}>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>
                                            <CustomInput
                                            type="text"
                                            label="Endereço"
                                            name="endereco"
                                            />
                                        </td>
                                        <td>
                                            <CustomSelect
                                            label="Estado"
                                            name="estado"
                                            id="uf"
                                            options={opcoesUF}
                                            />
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            
                                            <CustomInput
                                            type="text"
                                            label="Número"
                                            name="numero"
                                            />
                                        </td>
                                        <td>
                                            <CustomInput
                                            type="text"
                                            label="Cidade"
                                            name="cidade"
                                            />  
                                        </td>
                                        <td>
                                            
                                            <CustomInput
                                            type="text"
                                            label="Bairro"
                                            name="bairro"
                                            />
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <CustomInput
                            type="text"
                            label="Complemento"/>
                        </div>
                    </CustomContainerProfile>
                </form>
            </FormikProvider>
        </>
    );
}