import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard';

export default function FlashSaleContainer(props) {
    return(
        <div className="flash-sale-container">
            <ProductCard flashSale={true} />
        </div>
    )
}