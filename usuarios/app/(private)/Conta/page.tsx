'use client';
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomContainerProfile } from "@/components/CustomContainerProfile/CustomContainerProfile";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomInputEdit } from "@/components/CustomInputEdit/CustomInputEdit";
import { CustomInputSearch } from "@/components/CustomInputSearch/CustomInputSearch";
import { CustomProfilePicture } from "@/components/CustomProfilePicture/CustomProfilePicture";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";
import { CustomTextArea } from "@/components/CustomTextArea/CustomTextArea";
import { useFormik, Form, Formik, FormikProvider } from "formik";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import * as Yup from 'yup';

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

                    <CustomContainerProfile title="Dados Pessoais">
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                            <CustomInput 
                                type="text" 
                                label="E-mail" 
                                name="email"/>
                                    
                            <CustomInputSearch label="CEP" name="cep"></CustomInputSearch>
                        </div>
                    </CustomContainerProfile>
                </form>
            </FormikProvider>
        </>
    );
}