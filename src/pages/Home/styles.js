import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      max-width: 200px;
      align-self: center;
    }

    > strong {
      font-size: 17px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background-color: #7159c1;
      color: #fff;
      margin-top: auto;
      overflow: hidden;
      margin-top: auto;
      border: 0;
      border-radius: 4px;

      display: flex;
      align-items: center;
      transition: background-color 0.5s ease-in-out;

      &:hover {
        background-color: ${darken(0.1, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 10px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
