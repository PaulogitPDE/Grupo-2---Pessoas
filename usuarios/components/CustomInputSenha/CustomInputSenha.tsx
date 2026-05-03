"use client";

import { useState } from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
};

export default function CustomInputSenha({
  label,
  id,
  placeholder,
}: Props) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="inputs-container">
      <label htmlFor={id} className="label-login">
        {label}
      </label>

      <div className="inserir-senha-container">
        <input
          type={mostrar ? "text" : "password"}
          id={id}
          className="input-login"
          placeholder={placeholder}
        />

        <button
          type="button"
          className="btn-olho"
          onClick={() => setMostrar(!mostrar)}
        >
          👁
        </button>
      </div>
    </div>
  );
}
