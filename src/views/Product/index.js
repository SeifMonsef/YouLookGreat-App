import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchProducts } from '../ProductList/actions';
import { getProducts, getProductsFetching, productPropType } from '../ProductList/reducer';
import ProductDetails from './ProductDetails';
import { closeSearch } from '../../components/Bar/actions';
import { isSearchVisible } from '../../components/Bar/reducer';


class Product extends Component {
  componentDidMount() {
    const { searchVisible } = this.props;
    this.readProduct();
    if (searchVisible) {
      this.props.closeSearch();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.productId !== prevProps.match.params.productId) {
      this.readProduct();
    }
  }

  readProduct() {
    const { dispatch } = this.props;
    dispatch(fetchProducts({ id: this.props.match.params.productId }));
  }

  render() {
    if (this.props.loading === 1) {
      return (
        <div>
          <Loader active />
        </div>
      );
    }

    const product = this.props.products
      .find(obj => obj.id === Number(this.props.match.params.productId));

    if (_.isNil(product)) {
      return <p>Product does not exist</p>;
    }

    return <ProductDetails product={product} />;
  }
}

