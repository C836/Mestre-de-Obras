import { create, ReactTestRendererJSON } from "react-test-renderer";
import { Button } from "./../../components/Button";

describe("Testando componente Button", () => {
  const fn = jest.fn();
  const ButtonTree = create(<Button onClick={fn}>T3sT 1nPut#1</Button>);
  const ButtonComponent = ButtonTree.root.findByType("button");

  test("Deve exibir o texto recebido como children", () => {
    const ButtonJson = ButtonTree.toJSON() as ReactTestRendererJSON;

    expect(ButtonJson.children).toEqual(
      expect.arrayContaining(["T3sT 1nPut#1"])
    );
  });

  test("Quando clicado deve executar uma função recebida como props", () => {
    ButtonComponent.props.onClick();

    expect(fn.mock.calls.length).toBe(1);
  });
});
