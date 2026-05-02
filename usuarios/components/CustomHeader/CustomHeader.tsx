"use client";

import React from "react";

export const CustomHeader = () => {
  return (
    <>
      {/* Material Symbols */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"/>
      {/* Barra de Acessibilidade */}
      <div className="py-2" style={{ backgroundColor: "var(--cor-ciano-claro)"}}>
        <div className="container-fluid d-flex gap-2">

          <button className="btn btn-acessibilidade btn-contraste" >
            <span className="material-symbols-rounded" >fiber_manual_record</span>
          </button>

          <button className="btn btn-acessibilidade btn-sm" >A+</button>
          <button className="btn btn-acessibilidade btn-sm" >A-</button>

          <button className="btn btn-acessibilidade"  >
            <span className="material-symbols-rounded">hearing</span>
          </button>

        </div>
      </div>

      {/* Header */}
      <header className="bg-white">
        <div className="container-fluid">
          <div className="row align-items-center py-3">

            {/* Logo */}
            <div className="col-md-3">
              <img
                src="/img/logo_Bem-EstarAnimal.png"
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "170px" }}
              />
            </div>

            {/* Busca */}
            <div className="col-md-4">
              <div className="input-group">

                <button className="btn btn-busca-custom">
                  <span className="material-symbols-rounded">search</span>
                </button>

                <input
                  type="text"
                  className="form-control"
                  placeholder="O que você procura?"
                />

              </div>
            </div>

            {/* Logo direita */}
            <div className="col-md-5 text-end">
              <img
                src="/img/logo_prefeituraVotorantim.png"
                alt="Prefeitura"
                className="img-fluid"
                style={{ maxWidth: "120px" }}
              />
            </div>

          </div>
        </div>
      </header>

      {/* Navegação */}
      <nav className="border-top border-bottom py-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center gap-3">

            <button className="btn btn-menu-custom d-flex flex-column align-items-center">
              <span className="material-symbols-rounded">pets</span>
              <small>Menu</small>
            </button>

            <a href="#" className="text-decoration-none link-nav">Adote</a>
            <a href="#" className="text-decoration-none link-nav">Banco de Ração</a>
            <a href="#" className="text-decoration-none link-nav">Educação</a>
            <a href="#" className="text-decoration-none link-nav">Castração</a>

          </div>

          <div className="d-flex gap-2">

            <button className="btn btn-icon">
              <span className="material-symbols-rounded">mail</span>
            </button>

            <button className="btn btn-icon">
              <span className="material-symbols-rounded">phone_iphone</span>
            </button>

            <button className="btn btn-icon">
              <span className="material-symbols-rounded">photo_camera</span>
            </button>

          </div>

        </div>
      </nav>

      {/* ESTILOS LOCAIS */}
      <style jsx>{`
        .btn-acessibilidade {
          background: var(--background);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--cor-vermelho);
          color: var(--cor-vermelho);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-contraste {
            position: relative;
            overflow: hidden;
        }

        .btn-contraste::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: var(--cor-vermelho);
            z-index: 1;
        }

        .btn-contraste .material-symbols-rounded {
            position: relative;
            z-index: 2;
            color: var(--cor-vermelho);
        }
        .btn-busca-custom {
          background: var(--cor-verde-agua);
          color: white;
          border: none;
        }

        .btn-menu-custom {
          background: var(--cor-verde-agua);
          color: white;
          border-radius: 12px;
          padding: 8px 12px;
        }

        .btn-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--cor-verde-agua);
          color: var(--cor-verde-agua);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .link-nav {
          color: var(--cor-verde-agua);
          font-weight: 600;
        }

        .material-symbols-rounded {
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
