'use client';
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import style from './Cadastro.module.css';
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";
import { useState } from "react";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomButtonNS } from "@/components/CustomButtonNS/CustomButtonNS";
import { CustomCheckbox } from "@/components/CustomCheckbox/CustomCheckbox"
import { CustomInputSearch } from "@/components/CustomInputSearch/CustomInputSearch";
import { useRouter } from "next/navigation";

import { useFormik, FormikProvider } from "formik";
import * as Yup from"yup";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";



export default function Cadastro(){

  const [tipo, setTipo] = useState<'PF' | 'PJ'>('PF');

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
    nome: string;
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
        nome: ""
    },

    validationSchema: cadastroFormSchema,

    onSubmit: (values) => {
        router.push(`/Conta?nome=${encodeURIComponent(values.nome)}`)
    },


  })

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
            <FormikProvider value={formik}>
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
                                        value={formik.values.numero}
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
                                    <td>
                                         
                                        <CustomInput
                                        type="text"
                                        label="Bairro"
                                        name="bairro"
                                        value={formik.values.bairro}
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
                
                        <CustomCheckbox
                            id=""
                            label={
                                    <span>
                                        Eu declaro que li e aceito os <a href="">Termos de Uso</a> e <a href="">Política de Privacidade</a>
                                    </span>
                            }
                            value="">
                        </CustomCheckbox>
                
                        <CustomButton
                            title="Cadastrar-se"
                            onClick={() => router.push("/Conta")}
                            type="submit">
                        </CustomButton>
                    </CustomContainer>
                </form>
            </FormikProvider>
        </>
    );

}