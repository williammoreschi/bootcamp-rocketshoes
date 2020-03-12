import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;

  footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #7159c1;
      border: 0;
      border-radius: 4px;
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      padding: 12px 20px;
      transition: background-color 0.5s ease-in-out;

      &:hover {
        background-color: ${darken(0.3, '#7159c1')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    display: block;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }
  button {
    background: none;
    padding: 6px;
    border: 0;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
    text-transform: uppercase;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
