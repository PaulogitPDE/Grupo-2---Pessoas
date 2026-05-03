import { Prosto_One } from "next/font/google";
import "./CustomContainer.css";

type CustomContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function CustomContainer(props: CustomContainerProps) {
  return (
    <section className="container">
      <div className="padding-container">
        <div className="title-container">
          <h1 className="title">{props.title}</h1>
        </div>

        {props.children}
      </div>
    </section>
  );
}
