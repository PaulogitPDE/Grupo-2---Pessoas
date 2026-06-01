import React, { useState } from "react";

export const CustomHeaderAdmin = () => {

  const [menuAberto, setMenuAberto] = useState(false);

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

      {/*Header*/}
      <header className="bg-white">
        <div className="container-fluid">
          <div className="row align-items-center py-3">

            {/* Logo */}
            <div className="col-md-3">
              <a href="/"><img src="/img/logo_Bem-EstarAnimal.png" alt="Logo" className="img-fluid" style={{ maxWidth: "170px" }} /></a>
            </div>

            {/* Busca */}
           <div className="col-md-4">
                <div className="input-group">

                        <label htmlFor="search" className="input-group-text btn-busca-custom">
                            <span className="material-symbols-rounded">search</span>
                        </label>
                    <input type="text" className="form-control" id="search" placeholder="O que você procura?" />
                </div>
            </div>
            {/* Logo direita */}
            <div className="col-md-5 text-end">
              <img src="/img/logo_prefeituraVotorantim.png" alt="Prefeitura" className="img-fluid" style={{ maxWidth: "120px" }}/>
            </div>
          </div>
        </div>
      </header>
        <nav className="py-2">
          <div className="container-fluid d-flex justify-content-between align-items-center" id="nav" >
            {/* Navegação */}
            <div className="d-flex align-items-center gap-3" style={{marginLeft: "-1rem"}} >
              <button
                className="btn btn-menu-custom d-flex align-items-center gap-2"
                onClick={() => setMenuAberto(!menuAberto)}
              >
                <span className="material-symbols-rounded">
                  pets
                </span>

                <span>Menu</span>

                <span className="material-symbols-rounded">
                  keyboard_arrow_down
                </span>
              </button>

              <button className="btn-notificacao">
                <span className="material-symbols-rounded notificacao-icon">
                    notifications
                </span>
              </button>
            </div>
            {/*Contatos*/}
            <div className="d-flex align-items-center gap-2">
                  <a href="#" className="icone-social" aria-label="E-mail">
                      <span className="material-symbols-rounded">mail</span>
                  </a>

                  <a href="#" className="icone-social" aria-label="WhatsApp">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                  </a>

                  <a href="#" className="icone-social" aria-label="Instagram">
                      <span className="material-symbols-rounded">photo_camera</span>
                  </a>

                  <a href="#" className="icone-social" aria-label="YouTube">
                      <span className="material-symbols-rounded">live_tv</span>
                  </a>

                  <a href="#" className="icone-social" aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                  </a>
            </div>
          </div>
        </nav>

        {menuAberto && (
          <div className="menu-admin">
            
            <div className="menu-item">
              <span>Resgate de animal</span>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </div>

            <div className="menu-item">
              <span>Jogos de educação</span>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </div>

            <div className="menu-item">
              <span>Cadastro de animais</span>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </div>

            <div className="menu-item">
              <span>Banco de ração</span>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </div>

            <div className="menu-item">
              <span>Veterinário</span>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </div>

            <div className="menu-item">
              <span>Gestão de pessoas</span>
              <span className="material-symbols-rounded">
                keyboard_arrow_down
              </span>
            </div>

            <div className="menu-item sair">
              Sair
            </div>

          </div>
        )}
      {/* ESTILOS LOCAIS */}
      <style jsx>{`
        :root {
          --cor-verde-agua: #348888;
          --cor-verde-agua-claro: #d5f1ef;
          --cor-laranja: #FA7F08;
          --cor-escuro: #2d2d2d;
          --cor-cinza: #707070;
          --cor-branco: #ffffff;
          --cor-vermelho: #F24405;
          --cor-verde-petroleo: #348888; 
          --cor-ciano-medio: #22BABB; 
          --cor-ciano-claro:#9EF8EE; 
          --cor-laranja-vibrante: lab(66.55% 40.45 72.21); 
          --cor-laranja-avermelhado: #f24405;        
          --bnt-laranja-vibrante-80: lab(66.55% 40.45 72.21 / 0.80); 
        }
        .barra-nav {
            background: var(--cor-ciano-claro);
            border-radius: 18px;
            padding: 0.5rem 1.5rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            flex: 1;
            margin-left: -1rem;
            min-height: 40px;
            z-index: 0;
        }
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
        .btn-acessibilidade:hover {
            background: var(--cor-vermelho);
            color: var(--cor-branco);
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

       .btn-menu-custom{
          width: 150px;
          height: 48px;

          background: #348888;
          color: white;

          border-radius: 0 12px 12px 0;
          border: none;
        }
        .btn-notificacao{
          border: none;
          background: transparent;
        
          color: var(--cor-verde-agua);

          display:flex;
          align-items:center;
          justify-content:center;
        }
        .notificacao-icon{
          font-size: 32px !important;
        }
        .btn-menu-custom .material-symbols-rounded{
          font-size:22px;
        }

        .btn-menu-custom span:last-child {
            color: var(--cor-verde-agua-claro);
            font-weight: 600;
            font-size: 0.85rem;
        }

        .btn-menu-custom:hover {
            background: var(--cor-verde-petroleo);
            color: var(--cor-branco);
        }

        .btn-menu-custom:hover .material-symbols-rounded {
            color: var(--cor-branco);
        }

        .btn-menu-custom:hover span:last-child {
            color: var(--cor-branco);
        }
        

        .link-nav {
            color: #000000;
            font-weight: 600;
            padding: 0.35rem 0.5rem;
            transition: color 0.3s;
            white-space: nowrap;
        }

        .link-nav:hover {
            color: #000000;
            opacity: 0.6;
        }
        .icone-social {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid var(--cor-verde-agua);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--cor-verde-agua);
            transition: all 0.3s;
            text-decoration: none;
        }

        .icone-social:hover {
            background: var(--cor-verde-agua);
            color: var(--cor-branco);
        }
        .material-symbols-rounded {
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        #nav{
          border-bottom: 3px solid rgba(52, 136, 136, 0.15);
          padding-bottom: 10px;
        }
        .menu-admin{
          position:absolute;

          top:100%;
          left:0;

          width:280px;

          background:#9EF8EE;

          border-radius:0 0 12px 12px;

          box-shadow:0 4px 12px rgba(0,0,0,0.15);

          z-index:999;
      }

      .menu-item{
          display:flex;
          justify-content:space-between;
          align-items:center;

          padding:14px 20px;

          cursor:pointer;

          color:#348888;
          font-weight:600;
      }

      .menu-item:hover{
          background:rgba(52,136,136,0.12);
      }

      .sair{
          justify-content:center;
          font-weight:bold;
      }
      `}</style>
    </>
  );
};
