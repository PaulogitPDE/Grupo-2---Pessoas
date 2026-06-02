import style from "./CustomGradico.module.css";

interface CustomGraficoProps {
  atendidos: number;
  naoAtendidos: number;
}

export const CustomGrafico = ({atendidos, naoAtendidos}: CustomGraficoProps) => {
  const total = atendidos + naoAtendidos;
  const porcentagem = total > 0 ? Math.round((atendidos / total) * 100) : 0;
    return (
    <div className={style.container}>
        <div className={style.grafico}
            style={{
                background: `conic-gradient(
                #348888 0% ${porcentagem}%,
                #FA7F08 ${porcentagem}% 100%
                )`,
            }}
            >
            <div className={style.centro}>
                <strong>{porcentagem}%</strong>
                <small>Atendidos</small>
            </div>
        </div>
        <div className={style.legenda}>
            <p style={{ margin: 0 }} className={style.Atendidos}>Atendidos: {atendidos}</p>
            <p style={{ margin: 0 }} className={style.NaoAtendidos}>Não atendidos: {naoAtendidos}</p>
        </div>
    </div>
  );
};