"use client";
import style from "./CustomCheckbox.module.css";
import Form from 'react-bootstrap/Form';
import React from "react";
import { useState } from "react";

interface PropsCustomCheckbox { 
  value: string;
  label: React.ReactNode;
  id: string;
};

export const  CustomCheckbox = ( props: PropsCustomCheckbox) => {

  const {value, label, id} = props;

  return (
      <>
        <Form.Check
          value={ value }
          label={ label }
          id={ id }
          className={style.checkbox}>
        </Form.Check>
      </>
  );
}