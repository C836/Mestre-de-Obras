import { create } from "react-test-renderer";
import { Results } from "../../components/Results";

describe("Testando componente de exibição dos resultados", () => {
  const fn = jest.fn();
  const ResultsTree = create(
    <Results
      reset={fn}
      quant_blocos={10}
      quant_pisos={10}
      unidade_bloco={10}
      unidade_piso={10}
      total={10}
    />
  );

  test("Método recebido por Props sendo executado como esperado", () => {
    const ResetButton = ResultsTree.root.findByType("button");
    ResetButton.props.onClick();

    expect(fn.mock.calls.length).toBe(1);
  });
});
