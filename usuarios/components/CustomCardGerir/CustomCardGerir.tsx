'use client';

import { useRouter } from "next/navigation";
import style from "./CustomCardGerir.module.css";
import { CustomInputEdit } from "../CustomInputEdit/CustomInputEdit";

interface CustomCardGerirProps {
    id: number;
    nome: string;
    endereco: string;
    cpf: string;
    pet: string;
    foto: string;
    status: string;
}

export const CustomCardGerir = ({id,nome,endereco,cpf,pet,foto,status}: CustomCardGerirProps) => {

    const router = useRouter();

    return (
        <div className={style.card}>
            <img
                src={foto}
                alt={nome}
                className={style.foto}
            />

            <div className={style.informacoes}>
                <div className={style.linha}>
                    <div>
                        <h4>Nome</h4>
                        <div className={style.campo}>
                            {nome}
                        </div>
                    </div>
                    <div>
                        <h4>Endereço</h4>
                        <div className={style.campo}>
                            {endereco}
                        </div>
                    </div>
                    <div>
                        <h4>Status</h4>
                        <div className={style.campo}>
                            {status}
                        </div>
                    </div>
                </div>
                <div className={style.linha}>
                    <div>
                        <h4>Pets</h4>
                        <div className={style.campo}>
                            {pet}
                        </div>
                    </div>
                    <div>
                        <h4>CPF/CNPJ</h4>
                        <div className={style.campo}>
                            {cpf}
                        </div>
                    </div>

                    <button
                        className={style.botao}
                        onClick={() =>
                            router.push(`/admin/GerenciarUser/${id}`)
                        }
                    >
                        Gerenciar Usuário
                    </button>
                </div>
            </div>
        </div>
    );
};