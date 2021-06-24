import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.sale_price}</del>$
                {product.price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">${product.price}</h4>;
    }
    return (
        <header>
            <div className="listing_title">{product.title}</div>
            <div className="ps-product__meta">
                <div className="ps-product__rating">
                    <Rating />
                    <span>(1 review)</span>
                </div>
            </div>
        </header>
    );
};

export default ModuleDetailTopInformation;
