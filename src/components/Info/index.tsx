import { Container } from "../globals";
import { Details } from "./style";

export function Info() {
  return (
    <Container>
      <Details as={"details"}>
        <summary>Informações extras</summary>
        <ul>
          <li>• Altura das paredes: 3 metros</li>
          <li>
          • Cada cômodo tem <b>1 janela (2m²)</b> e <b>1 porta (1,8m²)</b> obrigatoriamente
          </li>
        </ul>
      </Details>
    </Container>
  );
}
