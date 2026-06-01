'use client';
import style from "./CustomSelect.module.css";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
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
      <Form.Group>
        <FloatingLabel
            controlId={id}
            label={label}
            className="mb-3"
        >
            <Form.Select
                {...field}
                className={style.select}
                isInvalid={!!meta.error && meta.touched}
            >
                <option value="">Selecione aqui...</option>

                {options.map((option) => (
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </FloatingLabel>
      </Form.Group>
  );
}