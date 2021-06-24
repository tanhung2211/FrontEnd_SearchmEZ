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

const EventsDescription = ({ product }) => {
    // if(product.file_video && product.file_video.length > 0) {
    //
    // } else {
    //
    // }
    return (
        <div className="ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Description" key="1">
                    {product.description}
                </TabPane>
                <TabPane tab="Organizer Details" key="2">
                    {product.special_traits}
                </TabPane>
                <TabPane tab="Attachment" key="3">
                    {product.file_video.map(file_video => (
                        <Link
                            href="/shop"
                            key={file_video.id}>
                            <a>{file_video.name}</a>
                        </Link>
                    ))}
                </TabPane>
                <TabPane tab="Location" key="4">
                    <p className="location"><a href={product.googlemap} target="_blank"><i className="icon-map-marker"></i> {product.location}</a> </p>
                </TabPane>
                <TabPane tab="Discussion" key="5">
                    {product.include_question}
                </TabPane>
            </Tabs>
        </div>
    );
};

export default EventsDescription;