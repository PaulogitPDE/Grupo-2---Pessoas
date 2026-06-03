import { CustomContainer } from "@/components/CustomContainer/CustomContainer";
import { CustomCardSucesso } from "@/components/CustomCardSucesso/CustomCardSucesso";

export default function CaseSucesso() {

  return (
      <>
          <h1
              style={{
                  textAlign: "center",
                  color: "var(--cor-verde-petroleo)"
              }}
          >
              Cases de Sucesso
          </h1>

          <CustomContainer BackgroundColor="#348888">

              <CustomCardSucesso
                  id={1}
                  nome="Theo "
                  endereco="Alameda Itanhaem 230"
                  cpf="322.355.670-62"
                  pet="Vira lata, 7 anos - Caramelo"
                  status="Case pendente"
                  foto="/img/adotante1.png"
              />
              <CustomCardSucesso
                  id={2}
                  nome="Pedro "
                  endereco="Rua 7 de Stembro 236"
                  cpf="400.289.222-00"
                  pet="Gato laranja, 2 anos - Miau"
                  status="Case pendente"
                  foto="/img/adotante2.png"
              />
              <CustomCardSucesso
                  id={3}
                  nome="Bruno "
                  endereco="Rua Jordan de Mira 3800"
                  cpf="161.173.141-50"
                  pet="Cavalo, 5 anos - Canela"
                  status="Case aprovado"
                  foto="/img/adotante3.png"
              />
              <CustomCardSucesso
                  id={4}
                  nome="Paulo "
                  endereco="Rua Santo Agosto de Paulo 38"
                  cpf="555.777.888.08"
                  pet="Darth, 3 anos - Pastor Maninois"
                  status="Case aprovado"
                  foto="/img/adotante4.png"
              />
          </CustomContainer>
      </>
  );
}