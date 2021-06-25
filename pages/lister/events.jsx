import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import {addItem} from "~/store/cart/action";
import ModuleAdoptShoppingActions from "~/components/elements/detail/modules/ModuleAdoptShoppingActions";
import {baseImage, imageURL} from "~/repositories/Repository";
import AnimalstDescription from "~/components/elements/detail/description/AnimalsDescription";
import RelatedProduct from "~/components/partials/product/RelatedProduct";
import HomeGetListing from "~/components/partials/homepage/home-default/HomeGetListing";
import CustomerBought from "~/components/partials/product/CustomerBought";
import Rating from "~/components/elements/Rating";
import BlogsDescription from "~/components/elements/detail/description/BlogsDescription";
import BookingDescription from "~/components/elements/detail/description/BookingDescription";
import ModuleEventsShoppingActions from "~/components/elements/detail/modules/ModuleEventsShoppingActions";
import ModuleAuctionCountdown from "~/components/elements/detail/modules/ModuleAuctionCountdown";
import EventsDescription from "~/components/elements/detail/description/EventsDescription";

const Events = ({ product }) => {
    return (
        <div className="container">
            <div className="ps-product--detail ps-product--fullwidth animals listing">
                <div className="ps-product__header">
                    <div className="row">
                        <div className="col-md-12 pd-20px">
                            <ThumbnailDefault product={product} vertical={true} />

                            <div className="row pd-20px">
                                <div className="col-md-12"><div className="listing_title">{product.title}</div></div>
                                <div className="col-md-6">
                                    <p>Lisitng #: <b>{product.id}</b></p>
                                    <p>Category: <b>{product.category}</b></p>
                                </div>
                                <div className="col-md-6">
                                    <p>Lister On: <b>{product.publishedAt}</b></p>
                                </div>
                            </div>
                            <div className="row pd-20px">
                                <div className="col-md-6">
                                    <p>Type: <b>{product.type}</b></p>
                                    <p className="location"><a href={`https://www.google.com/maps/place/${product.location}`} target="_blank"><i className="icon-map-marker"></i> {product.googlemap}, {product.location}</a> </p>
                                    <p>Price: <b>{product.type}</b></p>
                                </div>
                                <div className="col-md-6">
                                    <ModuleAuctionCountdown />
                                </div>
                            </div>
                            <div className="row pd-20px">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="ads">
                                            <img src={`${imageURL}icon/icon_ongdom.png`}/>
                                        </div>
                                        <div className="ads">
                                            <img src={`${imageURL}icon/icon_laco.png`}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <ModuleEventsShoppingActions product={product} />
                                </div>
                                <ModuleProductDetailSharing />
                                <ModuleDetailActionsMobile />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="row">
                        <div className="col-md-8 white-bg">
                            <EventsDescription product={product} />
                        </div>
                        <div className="col-md-4">
                            <div className="ads_images"><img src={`${imageURL}ads/ads1.png`} width="100%" /></div>
                            <div className="ads_images"><img src={`${imageURL}ads/ads2.png`} width="100%" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct collectionSlug="booking" />
            <CustomerBought layout="fullwidth" collectionSlug="booking" />;
        </div>
    );
};

export default Events;
