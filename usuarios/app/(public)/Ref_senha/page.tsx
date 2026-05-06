'use client'
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomContainerTitle } from "@/components/CustomContainerTitle/CustomContainerTitle";
import { CustomInputView } from "@/components/CustomInputView/CustomInputView";

export default function MainVisitante(){
    return(
        <>
            <CustomContainerTitle title="Redefinir senha">
                <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "350px", padding: "30px"}} /></a>
                <div style={{textAlign:"left"}}>
                    <CustomInputView label="Nova Senha" id="senha" placeholder="Digite sua senha"/>
                    <CustomInputView label="Confirmar Senha" id="confirmar_senha" placeholder="Digite novamente sua senha"/>
                </div>
                <CustomButton title="Redefinir Senha" onClick={() => { window.location.href = "/"; }} />
            </CustomContainerTitle>
        </>
    );  
}