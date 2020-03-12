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

    const data = response.data.map(product => ({
      ...product,
      princeFormatted: formatPrice(product.price),
    }));

    this.setState({ prodcuts: data });
  }

  render() {
    const { prodcuts } = this.state;
    return (
      <ProductList>
        {prodcuts.map(product => (
          <li key={String(product.id)}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.princeFormatted}</span>
            <button type="button">
              <div>
                <MdShoppingCart size={20} color="#Fff" /> {product.id}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
