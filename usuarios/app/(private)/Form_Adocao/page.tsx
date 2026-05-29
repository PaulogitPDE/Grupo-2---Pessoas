'use client';
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import style from './Form_Adocao.module.css';
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";
import { useState } from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomButtonNS } from "@/components/CustomButtonNS/CustomButtonNS";
import { CustomCheckbox } from "@/components/CustomCheckbox/CustomCheckbox"
import { CustomInputSearch } from "@/components/CustomInputSearch/CustomInputSearch";
import { useRouter } from "next/navigation";

import { useFormik } from "formik";
import * as Yup from"yup";
import { Span } from "next/dist/trace";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";


export default function Form_Adocao(){
  const Form_AdocaoFormSchema = Yup.object({
    QND_Animais: Yup.string()
    .required("Campo obrigatório!"),
    Adotou: Yup.string()
    .required("Campo obrigatório!"),
    Renda_Familiar: Yup.string()
    .required("Campo obrigatório!"),
    QND_Crianca: Yup.string()
    .required("Campo obrigatório!"),
    complemento: Yup.string()
    .required("Campo obrigatório!"),
  })

  interface IForm_AdocaoForm{
    QND_Animais?: string;
    Adotou?: string;
    Renda_Familiar?: string;
    QND_Crianca?: string;
    complemento?: string;
  }

  const formik = useFormik<IForm_AdocaoForm>({
    initialValues: {

    },

    validationSchema: Form_AdocaoFormSchema,

    onSubmit: (values) => {
        
    }

  })


  const router = useRouter();


    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1 className={style.title_cad}>Formulario de Adoção</h1>
                <CustomContainer>
                    <CustomCheckbox
                      label="Quantos animais você tem?"
                      value="QND_Animais"
                      id="QND_Animais"
                    />
                    <CustomInput 
                      type="text" 
                      label="Complemento"
                      change={formik.handleChange}
                      value={formik.values.complemento}
                    />
                    <CustomButton 
                    title="Enviar" 
                    onClick={() => router.push("/Conta")}></CustomButton>
                </CustomContainer>
            </form>
        </>
    );

}