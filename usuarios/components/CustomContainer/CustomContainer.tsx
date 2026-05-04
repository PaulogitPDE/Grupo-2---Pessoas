import { Prosto_One } from "next/font/google";
import style from "./CustomContainer.module.css"

type CustomContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function CustomContainer(props: CustomContainerProps) {
  return (
    <section className={style.container}>
      <div className={style.padding_container}>
        
        <div className={style.title_container}>
          <h1 className={style.title}>{props.title}</h1>
        </div>

        <div className={style.inputs_container}>
          {props.children}
        </div>
      </div>
    </section>
  );
}
