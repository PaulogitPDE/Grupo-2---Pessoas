import   CustomContainer from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";

export default function MainVisitante(){
    return(
        <>
            <CustomContainer title="Bem-Vindo(a)!">
               <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "350px", padding: "30px"}} /></a>
               <CustomInput label="E-mail" type="text"></CustomInput>
                <CustomInput label="Senha" type="password"></CustomInput>
                
            </CustomContainer>
        </>
    );  
}