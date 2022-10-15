import { ResultState } from "../../types";
import { formatarValor } from "../../utils/formatarValor";
import { Button } from "../Button";
import { Container, Border } from "../globals";
import { Value } from "./style";

interface Props extends ResultState {
  reset: () => void;
}

export function Results({
  reset,
  quant_blocos,
  quant_pisos,
  unidade_bloco,
  unidade_piso,
  total,
}: Props) {
  return (
    <Container>
      <Border>
        <Value>
          Blocos necessários
          <h2>
            {quant_blocos} unidades ({formatarValor(unidade_bloco)})
          </h2>
        </Value>
        <Value>
          Pisos necessários
          <h2>
            {quant_pisos} unidades ({formatarValor(unidade_piso)})
          </h2>
        </Value>
        <Value>
          Total
          <h2>{formatarValor(total)}</h2>
          <small>*Total incluindo taxa de desperdicio de 8%</small>
        </Value>

        <Button onClick={() => reset()}>Voltar</Button>
      </Border>
    </Container>
  );
}
