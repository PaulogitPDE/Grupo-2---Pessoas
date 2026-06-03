"use client";

import { useRouter } from "next/navigation";
import style from "./CustomHeaderAdmin.module.css";
import React, { useState } from "react";

export const CustomHeaderAdmin = () => {
  const router = useRouter();
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState<string | null>(null);
  const toggleSubmenu = (nome: string) => {
    setSubmenuAberto(
      submenuAberto === nome ? null : nome
    );
  };

  return (
    <>
      {/* Material Symbols */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"/>
      {/* Barra de Acessibilidade */}
      <div className="py-2" style={{ backgroundColor: "var(--cor-ciano-claro)"}}>
        <div className="container-fluid d-flex gap-2">

          <button className={`btn ${style.btnAcessibilidade} ${style.btnContraste}`} >
            <span className="material-symbols-rounded" >fiber_manual_record</span>
          </button>

          <button className={`btn ${style.btnAcessibilidade} ${style.btnAcessibilidadeSm}`} >A+</button>
          <button className={`btn ${style.btnAcessibilidade} ${style.btnAcessibilidadeSm}`} >A-</button>

          <button className={`btn ${style.btnAcessibilidade}`}  >
            <span className="material-symbols-rounded">hearing</span>
          </button>

        </div>
      </div>

      {/*Header*/}
      <header className="bg-white">
        <div className="container-fluid">
          <div className="row align-items-center py-3">

            {/* Logo */}
            <div className="col-md-3">
              <a href="/admin"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "170px" }} /></a>
            </div>

            {/* Busca */}
           <div className="col-md-4">
                <div className="input-group">

                        <label htmlFor="search" className={`input-group-text ${style.btnBusca}`}>
                            <span className="material-symbols-rounded">search</span>
                        </label>
                    <input type="text" className="form-control" id="search" placeholder="O que você procura?" />
                </div>
            </div>
            {/* Logo direita */}
            <div className="col-md-5 text-end">
              <a href="/"><img src="/img/logo_prefeituraVotorantim.png" alt="Prefeitura" className="img-fluid" style={{ maxWidth: "120px" }}/></a>
            </div>
          </div>
        </div>
      </header>
        <nav className="py-2">
          <div className="container-fluid d-flex justify-content-between align-items-center" id="nav" >
            {/* Navegação */}
           <div
              className={`d-flex align-items-center gap-3 ${style.menuWrapper}`}
              style={{ marginLeft: "-1rem" }}
            >
              <button
                type="button"
                className={`btn ${style.btnMenuCustom} d-flex align-items-center gap-2`}
                onClick={() => setMenuAberto(!menuAberto)}
              >
                <span className="material-symbols-rounded">
                  pets
                </span>

                <span>Menu</span>

                <span
                  className={`material-symbols-rounded  ${ 
                    menuAberto ? style.setaAberta : style.setaFechada
                  }`}
                >
                  keyboard_arrow_down
                </span>
              </button>

              <button className={style.btnNotificacao}>
                <span className={`material-symbols-rounded ${style.NotificacaoIcon}`}>
                  notifications
                </span>
              </button>

              {menuAberto && (
                <div className={style.menuAdmin}>
                  <div>
                      <div
                        className={style.menuItem}
                        onClick={() => toggleSubmenu("pessoas")}
                      >
                        <span>Gestão de Pessoas</span>

                        <span
                          className={`material-symbols-rounded ${
                            submenuAberto === "pessoas"
                              ? style.setaAberta
                              : style.setaFechada
                          }`}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      {submenuAberto === "pessoas" && (
                        <div className={style.submenu}>
                          <div className={style.submenuItem}>
                            <p onClick={() => router.push("/admin/CaseSucesso")}>Case de sucesso</p>
                          </div>

                          <div className={style.submenuItem}>
                           <p onClick={() => router.push("/admin/GerenciarUser")}>Gerenciar usuários</p>
                          </div>
                        </div>
                      )}
                  </div>
                  <div>
                      <div
                        className={style.menuItem}
                        onClick={() => toggleSubmenu("resgate")}
                      >
                        <span>Resgate de animal</span>

                        <span
                          className={`material-symbols-rounded ${
                            submenuAberto === "resgate"
                              ? style.setaAberta
                              : style.setaFechada
                          }`}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      {submenuAberto === "resgate" && (
                        <div className={style.submenu}>
                          <div className={style.submenuItem}>
                            Novo Resgate
                          </div>

                          <div className={style.submenuItem}>
                            Consultar Resgates
                          </div>

                          <div className={style.submenuItem}>
                            Histórico
                          </div>
                        </div>
                      )}
                  </div>
                  <div>
                      <div
                        className={style.menuItem}
                        onClick={() => toggleSubmenu("cadastroAnimais")}
                      >
                        <span>Cadastro de animais</span>
                        <span
                          className={`material-symbols-rounded ${
                            submenuAberto === "cadastroAnimais"
                              ? style.setaAberta
                              : style.setaFechada
                          }`}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      {submenuAberto === "cadastroAnimais" && (
                        <div className={style.submenu}>
                          <div className={style.submenuItem}>
                            Cadastro de animal.
                          </div>

                          <div className={style.submenuItem}>
                            Lista de animais.
                          </div>

                          <div className={style.submenuItem}>
                            Adotantes.
                          </div>

                          <div className={style.submenuItem}>
                            Adestradores.
                          </div>
                        </div>
                      )}
                  </div>
                  <div>
                      <div
                        className={style.menuItem}
                        onClick={() => toggleSubmenu("bancoRacao")}
                      >
                        <span>Banco de ração</span>
                        <span
                          className={`material-symbols-rounded ${
                            submenuAberto === "bancoRacao"
                              ? style.setaAberta
                              : style.setaFechada
                          }`}
                        >
                          keyboard_arrow_down
                        </span>
                      </div>

                      {submenuAberto === "bancoRacao" && (
                        <div className={style.submenu}>
                          <div className={style.submenuItem}>
                            Agendamentos.
                          </div>

                          <div className={style.submenuItem}>
                            Solicitações de ração.
                          </div>

                          <div className={style.submenuItem}>
                            Estoque.
                          </div>

                          <div className={style.submenuItem}>
                            Cadastro de ração.
                          </div>
                        </div>
                      )}
                  </div>

                  <div
                    className={`${style.menuItem} ${style.sair}`}
                    onClick={() => setMenuAberto(false)}
                  >
                    Sair
                  </div>
                </div>
              )}
            </div>
            {/*Contatos*/}
            <div className="d-flex align-items-center gap-2">
                  <a href="#" className={style.iconeSocial} aria-label="E-mail">
                      <span className="material-symbols-rounded">mail</span>
                  </a>

                  <a href="#" className={style.iconeSocial} aria-label="WhatsApp">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                  </a>

                  <a href="#" className={style.iconeSocial} aria-label="Instagram">
                      <span className="material-symbols-rounded">photo_camera</span>
                  </a>

                  <a href="#" className={style.iconeSocial} aria-label="YouTube">
                      <span className="material-symbols-rounded">live_tv</span>
                  </a>

                  <a href="#" className={style.iconeSocial} aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                  </a>
            </div>
          </div>
        </nav>
    </>
  );
};
