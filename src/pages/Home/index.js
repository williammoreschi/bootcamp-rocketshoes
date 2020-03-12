import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      princeFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={String(product.id)}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.princeFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
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

export default connect()(Home);
