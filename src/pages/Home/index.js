import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-renew-run-feminino/50/HZM-2893-050/HZM-2893-050_zoom2.jpg?ts=1579889552&ims=326x"
          alt="Produto"
        />
        <strong>Tênis Masculino com uma descrição gigante</strong>
        <span>R$ 150,35</span>
        <button type="button">
          <div>
            <MdShoppingCart size={20} color="#Fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-renew-run-feminino/50/HZM-2893-050/HZM-2893-050_zoom2.jpg?ts=1579889552&ims=326x"
          alt="Produto"
        />
        <strong>Tênis Masculino</strong>
        <span>R$ 150,35</span>
        <button type="button">
          <div>
            <MdShoppingCart size={20} color="#Fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-renew-run-feminino/50/HZM-2893-050/HZM-2893-050_zoom2.jpg?ts=1579889552&ims=326x"
          alt="Produto"
        />
        <strong>Tênis Masculino</strong>
        <span>R$ 150,35</span>
        <button type="button">
          <div>
            <MdShoppingCart size={20} color="#Fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-renew-run-feminino/50/HZM-2893-050/HZM-2893-050_zoom2.jpg?ts=1579889552&ims=326x"
          alt="Produto"
        />
        <strong>Tênis Masculino</strong>
        <span>R$ 150,35</span>
        <button type="button">
          <div>
            <MdShoppingCart size={20} color="#Fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-renew-run-feminino/50/HZM-2893-050/HZM-2893-050_zoom2.jpg?ts=1579889552&ims=326x"
          alt="Produto"
        />
        <strong>Tênis Masculino com uma descrição gigante</strong>
        <span>R$ 150,35</span>
        <button type="button">
          <div>
            <MdShoppingCart size={20} color="#Fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-renew-run-feminino/50/HZM-2893-050/HZM-2893-050_zoom2.jpg?ts=1579889552&ims=326x"
          alt="Produto"
        />
        <strong>Tênis Masculino</strong>
        <span>R$ 150,35</span>
        <button type="button">
          <div>
            <MdShoppingCart size={20} color="#Fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
