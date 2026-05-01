import React from "react";

interface CustomContainerProps {
  children: React.ReactNode[]
}

export default function CustomContainer(props: CustomContainerProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} >
        {...props.children}
    </div>
  );
}