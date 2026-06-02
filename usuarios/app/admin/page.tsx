'use client';

import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomInput } from "@/components/CustomInput/CustomInput";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { CustomSelect } from "@/components/CustomSelect/CustomSelect";
import style from './admin.module.css';

import { useState } from "react";
import { CustomButtonNotification } from "@/components/CustomButtonNotification/CustomButtonNotification";

export default function admin() {

  return (
    <>
        <h1 style={{justifySelf: "center", color: "var(--cor-verde-petroleo"}}>Bem vindo!</h1>
        <CustomContainer BackgroundColor="#348888" >
           <CustomContainer>
                <table>
                    <tbody>
                        <tr>
                            <td >
                                <CustomButtonNotification
                                    text="Resgate de Animal"
                                    value={0}  
                              />
                            </td>
                            <td>
                                <CustomInput
                                    label="Estado"
                                    name="estado"
                                    type="text"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CustomInput
                                    type="text"
                                    label="Número"
                                    name="numero"
                                />
                            </td>
                            <td>
                                <CustomInput
                                    type="text"
                                    label="Cidade"
                                    name="cidade"
                                />  
                            </td>
                            <td>
                                    
                                <CustomInput
                                    type="text"
                                    label="Bairro"
                                    name="bairro"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CustomContainer>
        </CustomContainer>
    </>
  );
}