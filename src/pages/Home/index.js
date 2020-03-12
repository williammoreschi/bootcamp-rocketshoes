import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    prodcuts: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(prodcut => ({
      ...prodcut,
      princeFormatted: formatPrice(prodcut.price),
    }));

    this.setState({ prodcuts: data });
  }

  render() {
    const { prodcuts } = this.state;
    return (
      <ProductList>
        {prodcuts.map(prodcut => (
          <li key={String(prodcut.id)}>
            <img src={prodcut.image} alt={prodcut.title} />
            <strong>{prodcut.title}</strong>
            <span>{prodcut.princeFormatted}</span>
            <button type="button">
              <div>
                <MdShoppingCart size={20} color="#Fff" /> {prodcut.id}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
