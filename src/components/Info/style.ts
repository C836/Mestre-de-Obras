import styled from "styled-components";
import { Border } from "../globals";

export const Details = styled(Border)`
  margin-bottom: 60px;

  ul, li {
    width: 100%;
    list-style: none
  }

  li {
    word-wrap: break-word;
    margin: 16px 0;

    :last-of-type {
      margin: 0
    }
  }
`;
