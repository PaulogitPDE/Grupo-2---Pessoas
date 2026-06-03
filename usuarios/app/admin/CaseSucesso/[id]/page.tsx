import { cases } from '@/app/data/cases';

import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInputEdit } from "@/components/CustomInputEdit/CustomInputEdit";
import { CustomButton } from "@/components/CustomButton/CustomButton";

import style from "./CaseSucesso0.module.css";
import { CustomButtonCancel } from '@/components/CustomButtonCancel/CustomButtonCancel';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function PerfilCaseSucesso({
    params,
}: Props) {

    const { id } = await params;

    const caseAtual = cases.find(
        item => item.id === Number(id)
    );

    if (!caseAtual) {
        return <h1>Case não encontrado</h1>;
    }

    return (
        <>
            <h1 className={style.titulo}>
                Case do Adotante
            </h1>

            <CustomContainer>

                <div className={style.cardPerfil}>

                    <h2>Perfil</h2>

                    <div className={style.topo}>

                        <div className={style.nomeContainer}>

                            <CustomInputEdit
                                label="Nome Completo"
                                type="text"
                                value={caseAtual.nome}
                            />

                        </div>

                        <img
                            src={caseAtual.foto}
                            alt={caseAtual.nome}
                            className={style.foto}
                        />

                    </div>

                    <div className={style.caseContainer}>

                        <label className={style.label}>
                            Case de Sucesso
                        </label>

                        <textarea
                            className={style.textArea}
                            defaultValue={caseAtual.historia}
                        />

                    </div>

                    <div className={style.botoes}>

                        <CustomButton 
                            title="Negar"
                        />

                        <CustomButton
                            title="Aprovar"
                        />

                    </div>

                </div>

            </CustomContainer>

            <CustomContainer>

                <h2 className={style.subtitulo}>
                    Dados sobre o processo de adoção
                </h2>

                <div className={style.processo}>

                    <CustomInputEdit
                        label="Aprovado por"
                        type="text"
                        value={caseAtual.aprovadoPor}
                    />

                    <CustomInputEdit
                        label="Animal"
                        type="text"
                        value={caseAtual.animal}
                    />

                </div>

            </CustomContainer>
        </>
    );
}