import React from 'react';
import './cart-dropdown.styles.scss';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        :
        <span className='empty-message'>Your cart is expty.</span>
      }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}>CHECKOUT</CustomButton>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));