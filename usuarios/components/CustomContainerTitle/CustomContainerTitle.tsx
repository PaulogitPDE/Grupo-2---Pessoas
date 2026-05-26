import style from "./CustomContainerTitle.module.css";

interface CustomContainerProps {
  title: string;
  children: React.ReactNode;
};

export const CustomContainerTitle = (props: CustomContainerProps) => {

  const {title, children} = props;

  return (
    <section className={style.container}>
      <div className={style.padding_container}>
        
        <div className={style.title_container}>
          <h1 className={style.title}>{ title }</h1>
        </div>

        <div className={style.inputs_container}>
          { children }
        </div>
      </div>
    </section>
  );
}
