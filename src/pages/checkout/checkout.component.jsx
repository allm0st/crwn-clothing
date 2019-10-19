import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const headerItems = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      {headerItems.map(headerItem => (
        <div key={headerItem} className="header-block">
          <span>{headerItem}</span>
        </div>
      ))}
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
