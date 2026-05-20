'use client'
import React from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomContainerTitle } from "@/components/CustomContainerTitle/CustomContainerTitle";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";   
import { useRouter } from 'next/navigation';

import * as Yup from "yup";

import { useFormik } from "formik";

export default function MainVisitante(){

    const router = useRouter();

    const loginFormSchema = Yup.object({
        username: Yup.string()
        .required("Campo obrigatório!")
        .min(3, "Mínimo de 3 caracteres!")
        .max(5),
        password: Yup.string()
        .required("Campo obrigatório!")
        .min(3, "Mínimo de 3 caracteres!")
        .max(5),
    });

    interface ILoginForm{
        username?: string;
        password?: string;
    };

    const formik = useFormik<ILoginForm>({
        initialValues: {

        },
        validationSchema: loginFormSchema,

        onSubmit: (values) => {
            console.log(`Dados: ${JSON.stringify(values)}`);
        }
    })

    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <CustomContainerTitle title="Bem-Vindo(a)!">
                    <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "350px", padding: "30px"}} /></a>
                    <div style={{textAlign:"left"}}>
                        <CustomInput 
                            label="E-mail | CPF | CNPJ" 
                            type="text" 
                            name="username"
                            value={formik.values.username} 
                            change={formik.handleChange}/>
                        <CustomInputView 
                            label="Senha" 
                            name="password" 
                            value={formik.values.password} 
                            change={formik.handleChange} />
                    </div>
                    <CustomButton title="FAZER LOGIN" type="submit" />
                    <br></br>
                    <br></br>
                    <p><a href="/Esq_senha" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Esqueceu sua senha?</a></p>
                    <p>Ainda não possui uma conta? <a href="/Cadastro" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">Cadastrar-se</a></p>
                </CustomContainerTitle>
            </form>
        </>
    );  
}