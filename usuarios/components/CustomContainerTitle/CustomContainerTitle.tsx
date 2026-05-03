import "./CustomContainerTitle.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CustomContainer({ title, children }: Props) {
  return (
    <section className="container">
      <div className="padding-container">
        <div className="title-container">
          <h1 className="title">{title}</h1>
        </div>

        {children}
      </div>
    </section>
  );
}
