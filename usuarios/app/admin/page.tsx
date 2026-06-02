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
                            <td >
                                <CustomButtonNotification
                                    text="Cadastro de Animal"
                                    value={20}  
                              />
                            </td>
                           
                        </tr>
                        <tr>
                            
                          <td>
                            <CustomButtonNotification 
                              text="Banco de Ração"
                              value={2}
                            /> 
                          </td>
                          <td>
                            <CustomButtonNotification
                              text="Gestão de pessoas"
                              value={32}
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