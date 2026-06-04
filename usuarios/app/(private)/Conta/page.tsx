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
            nomePerfil: "Paulo Vitor de Arruda",
            animalFavorito: "",
            descricao: "Estou muito feliz com o novo site...",
            email: "paulo.arruda@aluno.cps.sp.gov.br",
            senhaConta: "********",
            cep: "18110008",
            endereco: "Avenida Juscelino Kubitschek de Oliveira",
            estado: "SP",
            numero: "279",
            cidade: "Votorantim",
            bairro: "Centro"
        },        
 
        onSubmit: () => {}
    });

    
    const router = useRouter();

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
            <h1 style={{justifySelf: "center", color: "#348888"}}>Seu Perfil</h1>
            <FormikProvider value={formik}>
                <form>
                    <CustomContainerProfile title="Perfil">
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                            <CustomInputEdit
                                label="Nome completo"
                                type="text"
                                name="nomePerfil"
                                value={formik.values.nomePerfil}
                                change={formik.handleChange}
                            ></CustomInputEdit>

                            <CustomTextArea label="Descrição" name="descricao" change={formik.handleChange} value="Estou muito feliz com o novo site da Prefeitura de Votorantim para adoção de pets! Assim que entrei, fiquei impressionada com a quantidade de animais lindos esperando por um lar — cachorros, gatos, pássaros e até outros bichinhos que eu nem imaginava encontrar por lá. Sempre tive o sonho de adotar um cachorro, e agora sinto que chegou a hora certa. Quero poder oferecer tudo o que ele merece: carinho, segurança, atenção e um cantinho cheio de amor. A ideia de poder mudar a vida de um animal e, ao mesmo tempo, transformar a minha me deixa muito animada. Já fico imaginando os passeios, as brincadeiras e até as bagunças que virão. Adotar é um gesto de amor, e esse novo site torna tudo mais fácil e acessível. Mal posso esperar para encontrar meu novo melhor amigo!" />

                            <CustomSelect name="animalFavorito" label="Qual o seu animal favorito?" change={formik.handleChange} options={opcoes} ></CustomSelect>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                            <CustomProfilePicture></CustomProfilePicture>
                        </div>
                
                    </CustomContainerProfile>

                    <CustomContainerAdocao title="Adoção">
                        <h2>Gostaria de adotar um animal?</h2>
                        <p style={{fontSize: "18px"}}>
                            Realize já o formulário de adoção para provar que é apto(a) para adotar e cuidar de um animalzinho!
                        </p>
                        <p style={{fontSize: "18px"}}>
                            Neste bloco, você poderá observar o progresso do processo de adoção!
                        </p>
                        <CustomButton 
                            title="Formulário de Adoção" 
                            type="button" 
                            onClick={() => router.push('/Form_Adocao')} />
                    </CustomContainerAdocao>

                    <CustomContainerAdocao title="Festa Do Pijama">
                        <h2>Cuidar de um animal é a sua praia?</h2>
                        <p style={{fontSize: "18px", width: "60%"}}>
                            Se você <strong>mora em Votorantim</strong>, e demonstra um grande compromisso quando estamos falando de cuidar de animas, inscreva-se no nosso mais novo programa <strong>Festa do Pijama!</strong> Temos como finalidade, a oferta de <strong>lares temporários</strong> para animais selecionados, podendo passar períodos curtos, como <strong>finais de semana ou feriados</strong> com você!
                        </p>
                        <CustomButton 
                            title="Formulário da Festa do Pijama" 
                            type="button" 
                            onClick={() => router.push('/Form_FestaPijama')} />
                    </CustomContainerAdocao>

                    <CustomContainerProfile title="Dados Pessoais">
                        <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                            <CustomInput 
                                type="text" 
                                label="E-mail" 
                                name="email"
                                value={formik.values.email}
                                change={formik.handleChange}/>

                            <div style={{display: "flex", gap: "10%"}}>
                                <CustomInputView label="Senha" name="senhaConta" value={formik.values.senhaConta} change={formik.handleChange}/>
                                <CustomButton title="Redefinir Senha" type='button' name="redefSenhaConta" onClick={() => router.push('/Esq_senha')}/>
                            </div>
                        </div>
                        
                        <div>
                            <CustomInputSearch 
                                label="CEP" 
                                name="cep"
                                value={formik.values.cep}
                                change={formik.handleChange} />
                            <table style={{width: "100%"}}>
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
                            />
                        </div>
                    </CustomContainerProfile>
                </form>
            </FormikProvider>
        </>
    );
}