'use client'
import { CustomFooter } from "@/components/CustomFooter/CustomFooter";
import { CustomHeaderAdmin } from "@/components/CustomHeaderAdmin/CustomHeaderAdmin";
import React from "react";

interface MainLayoutProps{
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps){
  return (
    <>
      <CustomHeaderAdmin/>
        {props.children}
      <CustomFooter />
    </>
  );
}
