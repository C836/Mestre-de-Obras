import { Button } from "../Button";
import { ExtraInput, Label } from "./style";
import { Container, Border } from "../globals";
import { ResultState } from "./../../types";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { calcularMaterial } from "../../utils";

type Props = {
  setResults: Dispatch<SetStateAction<ResultState | null>>;
};

export function Form({ setResults }: Props) {
  const [formData, setFormData] = useState({
    metragem_comodo: 5, // required
    bloco_largura: 19,
    bloco_altura: 14,
    piso_largura: 60,
    piso_altura: 60,
    preco_bloco: 1, // required
    preco_piso: 1, // required
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = calcularMaterial(formData);

    console.log(result);

    setResults(result);
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: parseFloat(event.target.value),
    });
  }

  return (
    <Container as={"form"} onSubmit={handleSubmit}>
      <Border>
        <Label>
          Metragem do cômodo* (m²)
          <input
            required
            type="number"
            min={0.1}
            step=".1"
            name="metragem_comodo"
            value={formData.metragem_comodo}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Tamanho do bloco (cm)
          <ExtraInput>
            <input
              type="number"
              min={1}
              step=".1"
              placeholder="Largura (19)"
              name="bloco_largura"
              value={formData.bloco_largura}
              onChange={handleChange}
            />
            <input
              type="number"
              min={1}
              step=".1"
              placeholder="Altura (14)"
              name="bloco_altura"
              value={formData.bloco_altura}
              onChange={handleChange}
            />
          </ExtraInput>
        </Label>

        <Label>
          Tamanho do piso (cm)
          <ExtraInput>
            <input
              type="number"
              min={1}
              step=".1"
              placeholder="Largura (60)"
              name="piso_largura"
              value={formData.piso_largura}
              onChange={handleChange}
            />
            <input
              type="number"
              min={1}
              step=".1"
              placeholder="Altura (60)"
              name="piso_altura"
              value={formData.piso_altura}
              onChange={handleChange}
            />
          </ExtraInput>
        </Label>
      </Border>

      <Border>
        <Label>
          Preço por caixa de piso (10 unidades)*
          <input
            required
            type="number"
            min={0}
            step=".01"
            name="preco_piso"
            value={formData.preco_piso}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Preço por milheiro do bloco*
          <input
            required
            type="number"
            min={0}
            step=".01"
            name="preco_bloco"
            value={formData.preco_bloco}
            onChange={handleChange}
          />
        </Label>
        <Button>Calcular</Button>
      </Border>
    </Container>
  );
}
