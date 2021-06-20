import React, { Component, useEffect, useState } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import { carouselSingle } from '~/utilities/carousel-helpers';
import {
    getProductsByCategoriesHelper,
    getProductsByCollectionHelper,
} from '~/utilities/strapi-fetch-data-helpers';
import ProductSimple from '~/components/elements/products/ProductSimple';

const MarketHeathyAndBeauty = ({ collectionSlug }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const responseData = await getProductsByCategoriesHelper(
            collectionSlug
        );
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = productItems.map((item, index) => {
                if (index < 6) {
                    return <ProductSimple product={item} key={item.id} />;
                }
            });
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        productItemsView = <p>Loading...</p>;
    }

    return (
        <div className="ps-block--products-of-category">
            <div className="ps-block__categories">
                <h3>
                    Health & <br /> Beauty
                </h3>
                <ul>
                    <li>
                        <Link href="/listing" as="/listing/best-seller">
                            <a>Best Seller</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/new-arrivals">
                            <a>New Arrivals</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/women">
                            <a>Women</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/men">
                            <a>Men</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/girls">
                            <a>Girls</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/boys">
                            <a>Boys</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/baby">
                            <a>Baby</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/sale-and-deal">
                            <a>Sales & Deals</a>
                        </Link>
                    </li>
                </ul>
                <Link href="/listing">
                    <a className="ps-block__more-link">View All</a>
                </Link>
            </div>
            <div className="ps-block__slider">
                <Slider {...carouselSingle} className="ps-carousel">
                    <a>
                        <img
                            src="/static/img/slider/home-3/healthy-1.jpg"
                            alt="SearchmeZ"
                        />
                    </a>
                    <a>
                        <img
                            src="/static/img/slider/home-3/healthy-2.jpg"
                            alt="SearchmeZ"
                        />
                    </a>
                    <a>
                        <img
                            src="/static/img/slider/home-3/healthy-3.jpg"
                            alt="SearchmeZ"
                        />
                    </a>
                </Slider>
            </div>
            <div className="ps-block__product-box">{productItemsView}</div>
        </div>
    );
};

export default MarketHeathyAndBeauty;
