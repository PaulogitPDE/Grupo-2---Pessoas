'use client';
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import style from './Cadastro.module.css';
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";
import { useState } from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomButtonNS } from "@/components/CustomButtonNS/CustomButtonNS";
import { CustomInputSearch } from "@/components/CustomInputSearch/CustomInputSearch";
import { useRouter } from "next/navigation";

import { useFormik } from "formik";
import * as Yup from"yup";



export default function Cadastro(){

  const [tipo, setTipo] = useState<'PF' | 'PJ'>('PF');
  const [cep, setCep] = useState<string>();

  const cadastroFormSchema = Yup.object({
    nome: Yup.string()
    .required("Campo obrigatório!"),
    cpf: Yup.string()
    .required("Campo obrigatório!"),
    dataNasc: Yup.date()
    .required("Campo obrigatório!"),
    razaoSocial: Yup.string()
    .required("Campo obrigatório!"),
    nomeFantasia: Yup.string()
    .required("Campo obrigatório!"),
    cnpj: Yup.string()
    .required("Campo obrigatório!"),
    telefone: Yup.string()
    .required("Campo obrigatório!"),
    email: Yup.string()
    .required("Campo obrigatório!"),
    senha: Yup.string()
    .required("Campo obrigatório!"),
    cep: Yup.string()
    .required("Campo obrigatório!"),
    endereco: Yup.string()
    .required("Campo obrigatório!"),
    numero: Yup.string()
    .required("Campo obrigatório!"),
    bairro: Yup.string()
    .required("Campo obrigatório!"),
    estado: Yup.string()
    .required("Campo obrigatório!"),
    cidade: Yup.string()
    .required("Campo obrigatório!"),
    complemento: Yup.string()
    .required("Campo obrigatório!"),
  })

  interface ICadastroForm{
    nome?: string;
    cpf?: string;
    dataNasc?: Date;
    razaoSocial?: string;
    nomeFantasia?: string;
    cnpj?: string;
    telefone?: string;
    email?: string;
    senha?: string;
    cep?: string;
    endereco?: string;
    numero?: string;
    bairro?: string;
    estado?: string;
    cidade?: string;
    complemento?: string;
  }

  const formik = useFormik<ICadastroForm>({
    initialValues: {

    },

    validationSchema: cadastroFormSchema,

    onSubmit: (values) => {
        
    }

  })


  const router = useRouter();


    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1 className={style.title_cad}>Cadastro inicial</h1>
                <CustomContainer>

                    {(tipo === 'PF') && (
                        <>
                            <div className={style.container_buttons}>

                                <CustomButton 
                                title="Pessoa Física" 
                                onClick={() => setTipo('PF')} 
                                />

                                <CustomButtonNS 
                                title="Pessoa Jurídica" 
                                onClick={() => setTipo('PJ')} 
                                />

                            </div>

                            <h2 className={style.title_container}>Dados Pessoais</h2>
                            <CustomInput 
                            type="text" 
                            label="Nome Completo" 
                            name="nome"
                            value={formik.values.nome}
                            change={formik.handleChange}
                            />
                            
                            <CustomInput 
                            type="text" 
                            label="CPF" 
                            name="cpf"
                            value={formik.values.cpf}
                            change={formik.handleChange}
                            />
                            
                            <CustomInput 
                            type="date" 
                            label="Data de Nascimento" 
                            name="dataNasc"
                            change={formik.handleChange}
                            />
                            
                        </>
                    )}
                
                
                    {(tipo === 'PJ') && (
                        <>
                            <div className={style.container_buttons}>

                                <CustomButtonNS 
                                title="Pessoa Física" 
                                onClick={() => setTipo('PF')}
                                />

                                <CustomButton 
                                title="Pessoa Jurídica" 
                                onClick={() => setTipo('PJ')}
                                />

                            </div>
                            <h2 className={style.title_container}>Dados Empresariais</h2>

                            <CustomInput 
                            type="text" 
                            label="Razão Social" 
                            name="razaoSocial"
                            value={formik.values.razaoSocial}
                            change={formik.handleChange}
                            />

                            <CustomInput 
                            type="text" 
                            label="Nome Fantasia" 
                            name="nomeFantasia"
                            value={formik.values.nomeFantasia}
                            change={formik.handleChange}
                            />

                            <CustomInput 
                            type="text" 
                            label="CNPJ" 
                            name="cnpj"
                            value={formik.values.cnpj}
                            change={formik.handleChange}
                            />

                        </>
                    )}
                
                
                
                    <CustomInput 
                    type="text" 
                    label="Número de Telefone" 
                    name="telefone" 
                    value={formik.values.telefone}
                    change={formik.handleChange}/>

                    <CustomInput 
                    type="text" 
                    label="E-mail" 
                    name="email" 
                    value={formik.values.email}
                    change={formik.handleChange}/>

                    <CustomInputView 
                    label="Senha" 
                    name="senha" />

                    <CustomInputSearch 
                    id="CEP" 
                    placeholder="Digite seu CEP" 
                    label="CEP" 
                    name="cep"
                    change={formik.handleChange}
                    value={formik.values.cep}/>

                    <table>
                        <tbody>
                            <tr>

                                <td colSpan={2}>
                                    <CustomInput 
                                    type="text" 
                                    label="Endereço" 
                                    name="endereco" 
                                    value={formik.values.endereco}
                                    change={formik.handleChange} 
                                    />

                                </td>
                                <td>

                                    <CustomInput 
                                    type="text" 
                                    label="Número" 
                                    name="numero" 
                                    value={formik.values.numero}
                                    change={formik.handleChange} 
                                    />

                                </td>
                            </tr>
                            <tr>
                                <td>

                                    <CustomInput 
                                    type="text" 
                                    label="Bairro" 
                                    name="bairro" 
                                    value={formik.values.bairro}
                                    change={formik.handleChange} 
                                    />

                                </td>
                                <td>

                                    <CustomInput 
                                    type="text" 
                                    label="Estado" 
                                    name="estado" 
                                    value={formik.values.estado}
                                    change={formik.handleChange} 
                                    />

                                </td>
                                <td>

                                    <CustomInput 
                                    type="text" 
                                    label="Cidade" 
                                    name="cidade" 
                                    value={formik.values.cidade}
                                    change={formik.handleChange} 
                                    />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <CustomInput 
                    type="text" 
                    label="Complemento"
                    change={formik.handleChange}
                    value={formik.values.complemento}/>
                    <CustomButton 
                    title="Cadastrar-se" 
                    onClick={() => router.push("/Conta")}></CustomButton>
                </CustomContainer>
            </form>
        </>
    );

}