import React from "react";

interface CustomContainerProps {
  children: React.ReactNode[]
}

export const CustomHeader = (props: CustomContainerProps) => {
        return (
            <>
                // Barra de Acessibilidade
                <div >
                    <div >
                        <div >
                            <button >
                                <span >fiber_manual_record</span>
                            </button>
                            <button >A+</button>
                            <button>A-</button>
                            <button>
                                <span >hearing</span>
                            </button>
                        </div>
                    </div>
                </div>

                /* Cabeçalho Principal */
                <header>
                    <div>
                        <div>
                            <div>
                                <a href="../page.tsx">
                                    <img src={"../img/logo_Bem-EstarAnimal.png"} alt="Departamento do Bem-Estar Animal"/>
                                </a>
                            </div>
                            <div>
                                <div>
                                    <button >
                                        <span >search</span>
                                    </button>
                                    <input type="text" placeholder="O que você procura?"/>
                                </div>
                            </div>
                            <div >
                                <img src={"img/logo_prefeituraVotorantim.png"} alt="Prefeitura Municipal de Votorantim"/>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
}