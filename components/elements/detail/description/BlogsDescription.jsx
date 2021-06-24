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

const BlogsDescription = ({ product }) => {
    // if(product.file_video && product.file_video.length > 0) {
    //
    // } else {
    //
    // }
    return (
        <div className="ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Discussion" key="1">
                    
                </TabPane>
                <TabPane tab="Writer Details" key="2">

                </TabPane>
                <TabPane tab="Reviews" key="3">

                </TabPane>
            </Tabs>
        </div>
    );
};

export default BlogsDescription;
