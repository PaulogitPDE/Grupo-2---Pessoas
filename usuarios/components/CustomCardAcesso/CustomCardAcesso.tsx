"use client";

import { useRouter } from "next/navigation";
import style from "./CustomCardAcesso.module.css";

interface CustomCardAcessoProps {
  titulo: string;
  imagem: string;
  rota: string;
}

export const CustomCardAcesso = ({titulo,imagem,rota,}: CustomCardAcessoProps) => {

  const router = useRouter();

  return (
    <div
      className={style.card}
      onClick={() => router.push(rota)}
    >
        <h5>{titulo}</h5>
      <img
        src={imagem}
        alt={titulo}
        className={style.imagem}
      />
    </div>
  );
};