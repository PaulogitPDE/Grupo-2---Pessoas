import CustomContainer from "@/components/CustomContainerTitle/CustomContainerTitle";
import { CustomFooter } from "@/components/CustomFooter/CustomFooter";
import { CustomHeader } from "@/components/CustomHeader/CustomHeader";

export default function MainVisitante(){
    return(
        <>
            <CustomHeader/>

            <CustomContainer title="Bem-Vindo(a)!">
               <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "350px", padding: "30px"}} /></a>
            </CustomContainer>

            <CustomFooter/>
        </>
    );  
}