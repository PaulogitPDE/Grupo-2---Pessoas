import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomContainerProfile } from "@/components/CustomContainerProfile/CustomContainerProfile";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomProfilePicture } from "@/components/CustomProfilePicture/CustomProfilePicture";

export default function Conta(){
    return(
        <>
            <h1 style={{justifySelf: "center", color: "#348888"}}>Seu Perfil</h1>
            <CustomContainerProfile>
                <CustomInput 
                    label="Nome completo"
                    type="text"
                    value="Theo Marchetti Barcelos"/>
                    <CustomProfilePicture></CustomProfilePicture>
            </CustomContainerProfile>
        </>
    );
}