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
import ModuleAuctionShoppingActions from "~/components/elements/detail/modules/ModuleAuctionShoppingActions";
import ModuleCouponCountdown from "~/components/elements/detail/modules/ModuleCouponCountdown";
import AuctionDescription from "~/components/elements/detail/description/AuctionDescription";
import ModuleCouponShoppingActions from "~/components/elements/detail/modules/ModuleCouponShoppingActions";
import CouponDescription from "~/components/elements/detail/description/CouponDescription";

const Coupon = ({ product }) => {
    return (
        <div className="container">
            <div className="ps-product--detail ps-product--fullwidth animals listing">
                <div className="ps-product__header">
                    <div className="row">
                        <div className="col-md-6">
                            <ThumbnailDefault product={product} />
                        </div>
                        <div className="col-md-6">
                            <div className="ps-product__info">
                                <div className="listing_title">{product.title}</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Lisitng #: <b>{product.id}</b></p>
                                        <p>Category: <b>{product.category}</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Lister On: <b>{product.publishedAt}</b></p>
                                    </div>
                                </div>
                                <p className="location"><a href={`https://www.google.com/maps/place/${product.location}`} target="_blank"><i className="icon-map-marker"></i> {product.googlemap}, {product.location}</a> </p>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <p>Materials: <b>{product.color}</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Available: <b>{product.length}</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Discount Type: <b>{product.coupon_type}</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="listing_color">Amount: P{product.price}</p>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <ModuleCouponCountdown />
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <ModuleCouponShoppingActions product={product} />
                                    </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="ads">
                                            <img src={`${imageURL}icon/icon_ongdom.png`}/>
                                        </div>
                                        <div className="ads">
                                            <img src={`${imageURL}icon/icon_laco.png`}/>
                                        </div>
                                    </div>
                                </div>

                                </div>
                                {/*<ModuleDetailShoppingActions product={product} />*/}
                                <p>Share:</p>
                                <ModuleProductDetailSharing />
                                <ModuleDetailActionsMobile />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="row">
                        <div className="col-md-8 white-bg">
                            <CouponDescription product={product} />
                        </div>
                        <div className="col-md-4">
                            <div className="ads_images"><img src={`${imageURL}ads/ads1.png`} width="100%" /></div>
                            <div className="ads_images"><img src={`${imageURL}ads/ads2.png`} width="100%" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct collectionSlug="auction" />
            <CustomerBought layout="fullwidth" collectionSlug="auction" />;
        </div>
    );
};

export default Coupon;
