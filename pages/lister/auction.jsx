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
import ModuleAuctionCountdown from "~/components/elements/detail/modules/ModuleAuctionCountdown";
import AuctionDescription from "~/components/elements/detail/description/AuctionDescription";

const Auction = ({ product }) => {
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
                                        <p>Age: <b>{product.age}</b></p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <p>Color: <b>{product.color}</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Materials: <b>{product.length}</b></p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <p>Weight: <b>{product.weight}</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>L x W x H: <b>{product.length} x {product.width} x {product.height}</b></p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <p>Shipping fee: <b>{product.shipping_fee}</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Specs: <b>{product.special_traits}</b></p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <p>Quantity: <b>1</b></p>
                                        <p>Number of Bids: <b>1</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Starting Price: <b>P250.00</b></p>
                                        <p className="listing_color">Current Bid: P{product.asking_price}</p>
                                        {/*<div className="auction_countdown">*/}
                                        {/*    <h6>Closes: </h6>*/}
                                        {/*    <p>Auction Closes on:</p>*/}
                                        {/*    <table border="0" width="100%">*/}
                                        {/*        <tr>*/}
                                        {/*            <td>1</td>*/}
                                        {/*            <td>1</td>*/}
                                        {/*            <td>1</td>*/}
                                        {/*            <td>1</td>*/}
                                        {/*        </tr>*/}
                                        {/*        <tr>*/}
                                        {/*            <td>Days</td>*/}
                                        {/*            <td>HR</td>*/}
                                        {/*            <td>MIN</td>*/}
                                        {/*            <td>SEC</td>*/}
                                        {/*        </tr>*/}
                                        {/*    </table>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <ModuleAuctionCountdown />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" name="bid" placeholder="Place your bid here" className="form-control" />
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <ModuleAuctionShoppingActions product={product} />

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
                            <AuctionDescription product={product} />
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

export default Auction;
