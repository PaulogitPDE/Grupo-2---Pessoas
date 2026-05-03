type Props = {
  label: string;
  placeholder: string;
  id: string;
};

export default function CustomInputEntrada({
  label,
  placeholder,
  id,
}: Props) {
  return (
    <div className="inputs-container">
      <label htmlFor={id} className="label-login">
        {label}
      </label>

      <input
        type="text"
        id={id}
        className="input-login"
        placeholder={placeholder}
      />
    </div>
  );
}
