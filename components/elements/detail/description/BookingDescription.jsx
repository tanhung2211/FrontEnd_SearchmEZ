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

const BookingDescription = ({ product }) => {
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
                <TabPane tab="Location" key="2">
                    {/*<iframe*/}
                    {/*    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15674.136901692993!2d106.64093134999999!3d10.8469123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zTmjDoCB0aOG7nSDEkOG7qWMgQsOgLCBDw7RuZyB4w6MgUGFyaXMsIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1624608820849!5m2!1svi!2s"*/}
                    {/*    width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>*/}

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
                <TabPane tab="Realtor Details" key="3">
                    {product.special_traits}
                </TabPane>
                <TabPane tab="Attachment" key="4">
                    {product.file_video.map(file_video => (
                        <Link
                            href="/shop"
                            key={file_video.id}>
                            <a>{file_video.name}</a>
                        </Link>
                    ))}
                </TabPane>
                <TabPane tab="Ask A Question" key="4">
                    {product.include_question}
                </TabPane>
                <TabPane tab="Mortgage Calculator" key="4">
                    {product.include_question}
                </TabPane>
            </Tabs>
        </div>
    );
};

export default BookingDescription;
