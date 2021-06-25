import React from 'react';

import { Tabs } from 'antd';
import PartialDescription from '~/components/elements/detail/description/PartialDescription';
import PartialSpecification from '~/components/elements/detail/description/PartialSpecification';
import PartialVendor from '~/components/elements/detail/description/PartialVendor';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import PartialOffer from '~/components/elements/detail/description/PartialOffer';
import Animals from "~/pages/lister/animals";
import HeaderProduct from "~/components/shared/headers/HeaderProduct";
import ProductDetailFullwidth from "~/components/elements/detail/ProductDetailFullwidth";
import Link from "next/link";

const { TabPane } = Tabs;

const CouponDescription = ({ product }) => {
    return (
        <div className="ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Description" key="1">
                    {product.description}
                </TabPane>
                <TabPane tab="Lister Details" key="2">
                    {product.special_traits}
                </TabPane>
                <TabPane tab="Location" key="3">
                    <iframe
                        width="100%"
                        height="450"
                        style={{border:0}}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAfdQRKT9XashLndhD6wicOR0lkXgY8U6c&q=${product.location}`}
                    >
                    </iframe>
                    {product.location}
                </TabPane>
                <TabPane tab="Discussion" key="4">
                    {product.include_question}
                </TabPane>
            </Tabs>
        </div>
    );
};

export default CouponDescription;
