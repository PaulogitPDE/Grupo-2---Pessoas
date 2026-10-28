'use client';

import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";
import style from './Form_Adocao.module.css';

import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { CustomTextArea } from "@/components/CustomTextArea/CustomTextArea";
import { useState } from "react";

export default function Form_Adocao() {
  interface IValidacao {
      show ?: boolean;
      message ?: string;
      variante ?: "success" | "error";
  }

  interface IFormAdocaoForm {
    Adotou: string;
    QND_Adocoes: number;

    PossuiAnimais: string;
    QND_Animais: number;

    PossuiCriancas: string;
    QND_Criancas: number;

    QND_Pessoas: number;

    Renda_Familiar: string;
    complemento: string;
  }

  const FormAdocaoSchema = Yup.object({
    Adotou: Yup.string()
    .required("Campo obrigatório!"),

    PossuiAnimais: Yup.string()
    .required("Campo obrigatório!"),

    PossuiCriancas: Yup.string()
    .required("Campo obrigatório!"),

    Renda_Familiar: Yup.string()
    .required("Campo obrigatório!"),

    complemento: Yup.string()
    .required("Campo obrigatório!")
  });

  const [validacao, setValidacao] = useState<IValidacao>();
  const formik = useFormik<IFormAdocaoForm>({
    initialValues: {
      Adotou: "",
      QND_Adocoes: 0,

      PossuiAnimais: "",
      QND_Animais: 0,

      PossuiCriancas: "",
      QND_Criancas: 0,

      QND_Pessoas: 0,

      Renda_Familiar: "",
      complemento: ""
    },

    validationSchema: FormAdocaoSchema,

    onSubmit: (values) => {
    }
  });

  const opcoesSimNao = [
    { id: "1", value: "Sim", label: "Sim" },
    { id: "2", value: "Nao", label: "Não" }
  ];

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <h1 className={style.title_cad}>Formulário de Adoção</h1>

        <CustomContainer>
          
          <CustomSelect
            label="Já adotou algum animal anteriormente?"
            options={opcoesSimNao}
            name="Adotou"
            value={formik.values.Adotou}
            change={formik.handleChange}
            error={formik.errors.Adotou}
          />

          {formik.values.Adotou === "Sim" && (
            <div style={{width: "40%"}}>
              <CustomInput
                type="number"
                label="Informe a quantidade:"
                name="QND_Adocoes"
                change={formik.handleChange}
                value={formik.values.QND_Adocoes}
                error={formik.errors.QND_Adocoes}
              />
            </div>
          )}

          <CustomSelect
            label="Você possui outros animais de estimação?"
            options={opcoesSimNao}
            name="PossuiAnimais"
            change={formik.handleChange}
            value={formik.values.PossuiAnimais}
            error={formik.errors.PossuiAnimais}
          />

          {formik.values.PossuiAnimais === "Sim" && (
            <div style={{width: "40%"}}>
              <CustomInput
                type="number"
                label="Informe a quantidade:"
                name="QND_Animais"
                change={formik.handleChange}
                value={formik.values.QND_Animais}
                error={formik.errors.QND_Animais}
              />
            </div>
          )}

          <CustomSelect
            label="Possui crianças em casa?"
            options={opcoesSimNao}
            name="PossuiCriancas"
            change={formik.handleChange}
            value={formik.values.PossuiAnimais}
            error={formik.errors.PossuiAnimais}
          />

          {formik.values.PossuiCriancas === "Sim" && (
            <div style={{width: "40%"}}>
              <CustomInput
                type="number"
                label="Informe a quantidade:"
                name="QND_Criancas"
                change={formik.handleChange}
                value={formik.values.QND_Criancas}
                error={formik.errors.QND_Criancas}
              />
            </div>
          )}

          <CustomInput
            label="Quantas pessoas compõem a sua família?"
            type="number"
            name="QND_Pessoas"
            change={formik.handleChange}
            value={formik.values.QND_Pessoas}
            error={formik.errors.QND_Pessoas}
          />
               
          <CustomInput 
            label="Informe a sua renda familiar"
            type="number"
            name="Renda_Familiar"
            change={formik.handleChange}
            value={formik.values.Renda_Familiar}
            error={formik.errors.Renda_Familiar}
          />

          <CustomTextArea 
            label="Escreva sobre o motivo da adoção!!"
            value=""
            name="complemento"
            change={formik.handleChange}
          />

          <CustomButton
            title="Enviar"
            type="submit"
          />

        </CustomContainer>
      </form>
    </FormikProvider>
  );
}