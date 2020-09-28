import React from 'react';
import './collection-item.styles.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component';

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

const CollectionItem = ({ item, addItem}) => {
	const { name, price, imageUrl } = item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{backgroundImage: `url(${imageUrl})`}}
			>
				<CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
			</div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
		</div>
	);
}



export default connect(null, mapDispatchToProps)(CollectionItem);