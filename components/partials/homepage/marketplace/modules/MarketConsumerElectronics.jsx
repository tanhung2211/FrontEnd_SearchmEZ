import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import ProductSimple from '~/components/elements/products/ProductSimple';
import { carouselSingle } from '~/utilities/carousel-helpers';

const MarketConsumerElectronics = ({ collectionSlug }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
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
                <h3>Consumer Electronics</h3>
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
                        <Link href="/listing" as="/listing/tv-television">
                            <a>TV Television</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/air-conditions">
                            <a>Air Condition</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/washing-machine">
                            <a>Washing Machine</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/microware">
                            <a>Microwave</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/refrigerator">
                            <a>Refrigerator</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/office-electronic">
                            <a>Office Electronic</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listing" as="/listing/car-electronic">
                            <a>Car Electronic</a>
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
                            src="/static/img/slider/home-3/electronic-1.jpg"
                            alt="martfury"
                        />
                    </a>
                    <a>
                        <img
                            src="/static/img/slider/home-3/electronic-2.jpg"
                            alt="martfury"
                        />
                    </a>
                    <a>
                        <img
                            src="/static/img/slider/home-3/electronic-3.jpg"
                            alt="martfury"
                        />
                    </a>
                </Slider>
            </div>
            <div className="ps-block__product-box">{productItemsView}</div>
        </div>
    );
};
export default connect((state) => state.collection)(MarketConsumerElectronics);