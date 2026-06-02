'use client';
import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";
import { FormikProvider, useFormik } from "formik";
import style from "./Form_FestaPijama.module.css";
import * as Yup from 'yup';

export default function Form_Festa_Pijama(){


    const festaPijamaFormSchema = Yup.object({
        residencia: Yup.string()
        .required("Campo obrigatório!"),
        residMuroTela: Yup.string()
        .required("Campo obrigatório!"),
        espacoExterno: Yup.string()
        .required("Campo obrigatório!"),
        outrasPessoas: Yup.string()
        .required("Campo obrigatório!"),
        todosDeAcordo: Yup.string()
        .required("Campo obrigatório!"),
        criancaEmCasa: Yup.string()
        .required("Campo obrigatório!"),
        idadeCriancas: Yup.string()
        .required("Campo obrigatório!")
        .min(1, "Mínimo de 1 caractere!")
        .max(50, "Máximo de 50 caracteres!"),
        animalEmCasa: Yup.string()
        .required("Campo obrigatório!"),
        qtdAnimais: Yup.number()
        .required("Campo obrigatório!"),
        especie: Yup.string()
        .required("Campo obrigatório!")
        .min(2, "Mínimo de 2 caracteres")
        .max(100, "Máximo de 100 caracteres"),
        vacinadoCastradoAnimal: Yup.string()
        .required("Campo obrigatório!")
        .min(5, "Mínimo de 5 caracteres")
        .max(100, "Máximo de 100 caracteres"),
        experienciaAnimalResgatado: Yup.string()
        .required("Campo obrigatório!"),
        perfilAnimalHospedar: Yup.string()
        .required("Campo obrigatório!"),
        tempoSozinho: Yup.string()
        .required("Campo obrigatório!"),

    }) 

    interface IFestaPijama{        
        residencia?: string;
        residMuroTela?: string;
        espacoExterno?: string;
        outrasPessoas?: string;
        todosDeAcordo?: string;
        criancaEmCasa?: string;
        idadeCriancas?: string;
        animalEmCasa?: string;
        qtdAnimais?: number;
        especie?: string;
        vacinadoCastradoAnimal?: string;
        experienciaAnimalResgatado?: string;
        perfilAnimalHospedar?: string;
        tempoSozinho?: string;

    }

    const formik = useFormik<IFestaPijama>({
        initialValues: {},

        validationSchema: festaPijamaFormSchema,

        onSubmit: () => {

        }
    })

    const opcoesResid = [
        {id: "1", value: "Casa", label: "Casa"},
        {id: "2", value: "Apartamento", label: "Apartamento"},
        {id: "3", value: "Chácara", label: "Chácara"},
    ]

    const opcoesSimNao = [
        { id: "1", value: "Sim", label: "Sim" },
        { id: "2", value: "Nao", label: "Não" }
    ];

    const opcoesPerfilAnimalHospedar = [
        {id: "1", value: "caoPequenoPorte", label: "Cão de pequeno porte"},
        {id: "2", value: "caoMediOGrandePorte", label: "Cão de médio/grande porte"},
        {id: "3", value: "gato", label: "Gato"},
        {id: "4", value: "animalIdosoNecessidadeEspecial", label: "Animais idosos ou com necessidades especiais"},
    ]

    return(
        <FormikProvider value={formik}>
            <h1 className={style.title}>Formulário de Festa do Pijama</h1>
            <CustomContainer>
                <div>
                    <h3 className={style.subtitle}>Informações da Residência</h3>

                    <CustomSelect
                        label="Tipo de residência"
                        name="residencia"
                        value={formik.values.residencia}
                        options={opcoesResid}
                        change={formik.handleChange}
                        error={formik.errors.residencia} />
                    
                    <CustomSelect
                        label="A residência possui muros ou telas de proteção?"
                        name="residMuroTela"
                        value={formik.values.residMuroTela}
                        options={opcoesSimNao}
                        change={formik.handleChange}
                        error={formik.errors.residMuroTela} />
                    
                    <CustomSelect
                        label="Há espaço externo cercado?"
                        name="espacoExterno"
                        value={formik.values.espacoExterno}
                        options={opcoesSimNao}
                        change={formik.handleChange}
                        error={formik.errors.espacoExterno} />
                    
                    <CustomSelect
                        label="Mora com outras pessoas?"
                        name="outrasPessoas"
                        value={formik.values.outrasPessoas}
                        options={opcoesSimNao}
                        change={formik.handleChange}
                        error={formik.errors.outrasPessoas} />
                    {formik.values.outrasPessoas === "Sim" && (
                        <div style={{width: "50%"}}>
                            <CustomSelect
                                label="Todos estão de acordo com a hospedagem temporária?"
                                name="todosDeAcordo"
                                value={formik.values.todosDeAcordo}
                                options={opcoesSimNao}
                                change={formik.handleChange}
                                error={formik.errors.todosDeAcordo} />
                        </div>
                    )}
                    <CustomSelect
                        label="Possui crianças em casa?"
                        name="criancaEmCasa"
                        value={formik.values.criancaEmCasa}
                        options={opcoesSimNao}
                        change={formik.handleChange}
                        error={formik.errors.criancaEmCasa}
                    />
                    {formik.values.criancaEmCasa === "Sim" && (
                        <div style={{width: "50%"}}>
                            <CustomInput
                            label="Informe a idade"
                            type="text"
                            name="idadeCriancas"
                            value={formik.values.idadeCriancas}
                            change={formik.handleChange}
                            error={formik.errors.idadeCriancas}
                            />
                        </div>
                    )}
                </div> 
                
                <div>
                    <h3 className={style.subtitle}>Experiência e Perfil do Hospedeiro</h3>
                    
                    <CustomSelect
                        label="Possui animais de estimação atualmente?"
                        name="animalEmCasa"
                        value={formik.values.animalEmCasa}
                        options={opcoesSimNao}
                        change={formik.handleChange}
                        error={formik.errors.animalEmCasa}
                    />
                    {formik.values.animalEmCasa === "Sim" && (
                        <div style={{width: "50%"}}>
                            <CustomInput
                                label="Quantos?"
                                type="number"
                                name="qtdAnimais"
                                value={formik.values.qtdAnimais}
                                change={formik.handleChange}
                                error={formik.errors.qtdAnimais}
                            />
                            <CustomInput
                                label="Informe a espécie"
                                type="text"
                                name="especie"
                                value={formik.values.especie}
                                change={formik.handleChange}
                                error={formik.errors.especie}
                            />
                            <CustomInput
                                label="Estão vacinados e castrados?"
                                type="text"
                                name="vacinadoCastradoAnimal"
                                value={formik.values.vacinadoCastradoAnimal}
                                change={formik.handleChange}
                                error={formik.errors.vacinadoCastradoAnimal}
                            />
                            
                            
                        </div>
                    )}
                    <CustomSelect
                        label="Possui experiência com cães ou gatos resgatados?"
                        name="experienciaAnimalResgatado"
                        value={formik.values.experienciaAnimalResgatado}
                        options={opcoesSimNao}
                        change={formik.handleChange}
                        error={formik.errors.experienciaAnimalResgatado} />
                    
                    <CustomSelect
                        label="Qual o perfil de animal você tem preferência em hospedar?  "
                        name="perfilAnimalHospedar"
                        value={formik.values.perfilAnimalHospedar}
                        options={opcoesPerfilAnimalHospedar}
                        change={formik.handleChange}
                        error={formik.errors.perfilAnimalHospedar} />

                    <CustomInput
                        label="Quanto tempo, em média, o animal ficará sozinho em casa por dia? "
                        type="text"
                        name="tempoSozinho"
                        value={formik.values.tempoSozinho}
                        change={formik.handleChange}
                        error={formik.errors.tempoSozinho}
                        />
                </div>

                <div>
                    <h3 className={style.subtitle}>Upload de Documentação</h3>

                    <input 
                        type="file" 
                        name="" 
                        id="" />
                </div>
                
            </CustomContainer>
        </FormikProvider>
    );
}