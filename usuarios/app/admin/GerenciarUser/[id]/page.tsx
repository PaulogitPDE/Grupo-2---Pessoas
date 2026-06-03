import { cases } from '@/app/data/cases';

import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInputEdit } from "@/components/CustomInputEdit/CustomInputEdit";
import { CustomButton } from "@/components/CustomButton/CustomButton";

import style from "./GerenciarUser0.module.css";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function GerenciarUsuario({params}: Props) {

    const { id } = await params;

    const usuario = cases.find(
        item => item.id === Number(id)
    );

    if (!usuario) {
        return <h1>Usuário não encontrado</h1>;
    }

    return (
        <>
            <h1 className={style.titulo}>
                Gerenciar Usuário
            </h1>

            <CustomContainer>

                <div className={style.card}>

                    <div className={style.topo}>

                        <img
                            src={usuario.foto}
                            alt={usuario.nome}
                            className={style.foto}
                        />

                        <div className={style.dados}>

                            <CustomInputEdit
                                label="Nome"
                                type="text"
                                value={usuario.nome}
                            />

                            <CustomInputEdit
                                label="Pets"
                                type="text"
                                value={usuario.animal}
                            />

                            <CustomInputEdit
                                label="CPF/CNPJ"
                                type="text"
                                value={`CPF ${usuario.id}`}
                            />

                        </div>

                        <div className={style.observacao}>
                            <label>Observação</label>

                            <textarea
                                className={style.textArea}
                            />
                        </div>

                    </div>

                    <div className={style.bloco}>

                        <h3>Função</h3>

                        <label>
                            <input type="checkbox"/>
                            Veterinário
                        </label>

                        <label>
                            <input type="checkbox"/>
                            Administrador
                        </label>

                        <label>
                            <input type="checkbox"/>
                            Doador
                        </label>

                    </div>

                    <div className={style.blocoGrande}>

                        <h3>Permissões</h3>

                        <div className={style.gridPermissao}>

                            <label>
                                <input type="checkbox"/>
                                Gestão de Pessoas
                            </label>

                            <label>
                                <input type="checkbox"/>
                                Banco de Ração
                            </label>

                            <label>
                                <input type="checkbox"/>
                                Gestor Veterinário
                            </label>

                            <label>
                                <input type="checkbox"/>
                                Moderador de Denúncias
                            </label>

                        </div>

                    </div>

                    <div className={style.acoes}>

                        <div>

                            <label>Enviar aviso</label>

                            <textarea
                                className={style.caixa}
                            />

                            <CustomButton
                                title="Enviar aviso"
                            />

                        </div>

                        <div>

                            <label>Banir usuário</label>

                            <textarea
                                className={style.caixa}
                            />

                            <CustomButton
                                title="Banir usuário"
                            />

                        </div>

                    </div>

                    <div className={style.footer}>

                        <CustomButton
                            title="Cancelar"
                        />

                        <CustomButton
                            title="Salvar alterações"
                        />

                    </div>

                </div>

            </CustomContainer>
        </>
    );
}