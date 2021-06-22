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

const Animals = ({ product }) => {
    return (
        <div className="ps-product--detail ps-product--fullwidth animals listing">
            <div className="ps-product__header">
                <ThumbnailDefault product={product} />
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
                    <p className="location"><a href={product.googlemap} target="_blank"><i className="icon-map-marker"></i> {product.location}</a> </p>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Type: <b>{product.type}</b></p>
                            <p>Weight: <b>{product.weight}</b></p>
                        </div>
                        <div className="col-md-6">
                            <p></p>
                            <p>L x W x H: <b>{product.length} x {product.width} x {product.height}</b></p>
                        </div>
                    </div>
                    <div className="preference">
                        <h2>Preference:</h2>
                        <p>Color: <span className="preference_color {product.color}" style={{background: product.color}}></span></p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Total Price: P{product.asking_price}</h2>
                        </div>
                        <div className="col-md-6">
                            <ModuleAdoptShoppingActions product={product} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={`${imageURL}icon/icon_ongdom.png`}/>
                        </div>
                        <div className="col">
                            <img src={`${imageURL}icon/icon_laco.png`}/>
                        </div>
                    </div>
                    {/*<ModuleDetailShoppingActions product={product} />*/}
                    <p>Share:</p>
                    <ModuleProductDetailSharing />
                    <ModuleDetailActionsMobile />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <AnimalstDescription product={product} />
                </div>
                <div className="col-md-4">
                    <div className="ads_images"><img src={`${imageURL}ads/ads1.png`} width="100%" /></div>
                    <div className="ads_images"><img src={`${imageURL}ads/ads2.png`} width="100%" /></div>
                </div>
            </div>

        </div>
    );
};

export default Animals;
