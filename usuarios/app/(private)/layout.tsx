'use client'
import { CustomFooter } from "@/components/CustomFooter/CustomFooter";
import { CustomHeader} from "@/components/CustomHeader/CustomHeader";
import React from "react";

interface MainLayoutProps{
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps){
  return (
    <>
      <CustomHeader/>
        {props.children}
      <CustomFooter />
    </>
  );
}
