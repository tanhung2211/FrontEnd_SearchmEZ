import React from 'react';
import Link from 'next/link';
import Rating from '../Rating';

import {
    StrapiProductBadge,
    StrapiProductPrice,
    StrapiProductThumbnail,
} from '~/utilities/product-helper';

import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product }) => {
    // Views
    const priceView = StrapiProductPrice(product);
    const thumbnailImage = StrapiProductThumbnail(product);
    const badgeView = StrapiProductBadge(product);

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                {thumbnailImage}
                {/*{badgeView}*/}
                <ModuleProductActions product={product} />
                <Link href="/lister/[pid]" as={`/lister/${product.id}`}>
                    <a className="ps-product__title">{product.title}</a>
                </Link>
            </div>
            {/*<div className="ps-product__container">*/}
            {/*    <Link href="/listing">*/}
            {/*        <a className="ps-product__vendor">{product.listing}</a>*/}
            {/*    </Link>*/}
            {/*    <div className="ps-product__content">*/}
            {/*        <Link href="/lister/[pid]" as={`/lister/${product.id}`}>*/}
            {/*            <a className="ps-product__title">{product.title}</a>*/}
            {/*        </Link>*/}
            {/*        <div className="ps-product__rating">*/}
            {/*            <Rating />*/}
            {/*            <span>02</span>*/}
            {/*        </div>*/}
            {/*        {priceView}*/}
            {/*    </div>*/}
            {/*    <div className="ps-product__content hover">*/}
            {/*        <Link href="/lister/[pid]" as={`/lister/${product.id}`}>*/}
            {/*            <a className="ps-product__title">{product.title}</a>*/}
            {/*        </Link>*/}
            {/*        /!*{priceView}*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Product;
