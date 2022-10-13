import { Container } from "./style";

type Props = {
  children: string;
  onClick?: () => any;
};

export function Button({ children, onClick }: Props) {
  return <Container onClick={onClick}>{children}</Container>;
}
