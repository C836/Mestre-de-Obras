import { Button } from "../Button";
import { Container, ExtraInput, FieldSet, Label } from "./style";

export function Form() {
  return (
    <form>
      <Container>
        <FieldSet>
          <Label>
            Metragem do cômodo* (m²)
            <input required />
          </Label>

          <Label>
            Tamanho do bloco (cm)
            <ExtraInput>
              <input placeholder="Largura (19)" />
              <input placeholder="Altura (14)" />
            </ExtraInput>
          </Label>

          <Label>
            Tamanho do piso (cm)
            <ExtraInput>
              <input placeholder="Largura (60)" />
              <input placeholder="Altura (60)" />
            </ExtraInput>
          </Label>
        </FieldSet>

        <FieldSet>
          <Label>
            Preço por caixa de piso*
            <input required />
          </Label>

          <Label>
            Preço por milheiro do bloco*
            <input required />
          </Label>
          <Button />
        </FieldSet>
      </Container>
    </form>
  );
}
