'use client';
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import style from './Cadastro.module.css';
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";
import { useEffect, useState } from "react";
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
  const [cepInvalido, setCepInvalido] = useState(false);

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
    .required("Campo obrigatório!")
    .test("cepInvalido", "CEP não encontrado!", () => !cepInvalido),
    endereco: Yup.string()
    .required("Campo obrigatório!"),
    numero: Yup.string()
    .required("Campo obrigatório!"),
    bairro: Yup.string()
    .required("Campo obrigatório!"),
    estado: Yup.string()
    .required("Campo obrigatório!")
    .min(2, "Insira apenas a sigla do seu estado!")
    .max(2, "Insira apenas a sigla do seu estado!"),
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
    cep: string;
    endereco?: string;
    numero?: string;
    bairro?: string;
    estado?: string;
    cidade?: string;
    complemento?: string;
  }

  const formik = useFormik<ICadastroForm>({
    initialValues: {
        nome: "",
        cep: ""
    },

    validationSchema: cadastroFormSchema,

    onSubmit: (values) => {
        router.push(`/Conta?nome=${encodeURIComponent(values.nome)}`)
    },


  })

  const router = useRouter();

  const apiCEP = async () => {
    const cep = formik.values.cep;

    if(cep?.length !== 9){
        return;
    }

    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: "GET",
    });

    const endereco = await request.json();

    if(endereco.erro){
        setCepInvalido(true);

        formik.setFieldError("cep", "CEP não encontrado!")

        formik.setFieldValue("endereco", "", false);
        formik.setFieldValue("bairro", "", false);
        formik.setFieldValue("cidade", "", false);
        formik.setFieldValue("estado", "", false);
        return;
    }

    setCepInvalido(false);

    formik.setFieldValue("endereco", endereco.logradouro);
    formik.setFieldValue("bairro", endereco.bairro);
    formik.setFieldValue("cidade", endereco.localidade);
    formik.setFieldValue("estado", endereco.uf);

    formik.setFieldError("cep", undefined);
  }

  useEffect(() => {
        apiCEP()
    }, [formik.values.cep])

  

  const opcoesUF = [
        {id: "1", value: "AC", label: "Acre"},
        {id: "2", value: "AL", label: "Alagoas"},
        {id: "3", value: "AM", label: "Amazonas"},
        {id: "4", value: "BA", label: "Bahia"},
        {id: "5", value: "CE", label: "Ceará"},
        {id: "6", value: "DF", label: "Distrito Federal"},
        {id: "7", value: "ES", label: "Espírito Santo"},
        {id: "8", value: "GO", label: "Goiás"},
        {id: "9", value: "MA", label: "Maranhão"},
        {id: "10", value: "MT", label: "Mato Grosso"},
        {id: "11", value: "MS", label: "Mato Grosso do Sul"},
        {id: "12", value: "MG", label: "Minas Gerais"},
        {id: "13", value: "PA", label: "Pará"},
        {id: "14", value: "PB", label: "Paraíba"},
        {id: "15", value: "PR", label: "Paraná"},
        {id: "16", value: "PE", label: "Pernambuco"},
        {id: "17", value: "PI", label: "Piauí"},
        {id: "18", value: "RJ", label: "Rio de Janeiro"},
        {id: "19", value: "RN", label: "Rio Grande do Norte"},
        {id: "20", value: "RS", label: "Rio Grande do Sul"},
        {id: "21", value: "RO", label: "Rondônia"},
        {id: "22", value: "RR", label: "Roraima"},
        {id: "23", value: "SC", label: "Santa Catarina"},
        {id: "24", value: "SP", label: "São Paulo"},
        {id: "25", value: "SE", label: "Sergipe"},
        {id: "26", value: "TO", label: "Tocantins"}
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
                        <div style={{width: "33%"}}>
                            <CustomInput
                            type="text"
                            label="CEP"
                            name="cep"
                            change={formik.handleChange}
                            value={formik.values.cep}
                            error={formik.errors.cep}/>
                        </div>
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
                                        value={formik.values.estado}
                                        change={formik.handleChange}
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