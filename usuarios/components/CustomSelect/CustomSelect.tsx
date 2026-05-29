'use client';
import style from "./CustomSelect.module.css";
import Form from 'react-bootstrap/Form';
import React from "react";
import { useField } from "formik";

// Interface para criar as opções do select
interface SelectOption {
    id: string;
    value: string;
    label: string;
}

// Interface para as props do componente CustomSelect
interface PropsCustomSelect { 
    name: string;
    id?: string;
    options: SelectOption[];
    label?: string;
};

export const  CustomSelect = ( props: PropsCustomSelect) => {

  const {name, options, label, id} = props;
  const [field, meta] = useField(name);
  return (
      <Form.Group style={id === "uf" ? {marginTop: "-15%"} : undefined}>
        {label && <Form.Label className="fw-bold">{label}</Form.Label>}
        <Form.Select 
            //Injeta o name, value (string única), onChange e onBlur automaticamente
            {...field}
            isInvalid={!!meta.error && meta.touched}
            className={style.select}
            id={ id }>

            <option value="">Selecione aqui...</option>
            {options.map((option) => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Form.Select>
      </Form.Group>
  );
}