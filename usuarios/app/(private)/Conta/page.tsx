import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomContainerProfile } from "@/components/CustomContainerProfile/CustomContainerProfile";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomInputEdit } from "@/components/CustomInputEdit/CustomInputEdit";
import { CustomProfilePicture } from "@/components/CustomProfilePicture/CustomProfilePicture";
import { CustomTextArea } from "@/components/CustomTextArea/CustomTextArea";

export default function Conta(){
    return(
        <>
            <h1 style={{justifySelf: "center", color: "#348888"}}>Seu Perfil</h1>
            <CustomContainerProfile>
                <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                    <CustomInputEdit 
                        label="Nome completo"
                        type="text"
                        value="Theo Marchetti Barcelos"
                        name="nomePerfil"
                    ></CustomInputEdit>
                    <CustomTextArea label="Descrição"></CustomTextArea>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                    <CustomProfilePicture></CustomProfilePicture>
                </div>
                    
            </CustomContainerProfile>
        </>
    );
}