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
import ModuleGenerallistingShoppingActions
    from "~/components/elements/detail/modules/ModuleGenerallistingShoppingActions";
import JobsDescription from "~/components/elements/detail/description/JobsDescription";

const Jobs = ({ product }) => {
    return (
        <div className="container">
            <div className="ps-product--detail ps-product--fullwidth animals listing">
                <div className="row">
                    <div className="col-md-8 white-bg">
                        <div className="white-bg">
                            <div className="feature_image mt-20">
                                <img src={`${baseImage}${product.listing}/${product.images[0].name}`} width="100%" />
                            </div>
                            <div className="listing_title">{product.title}</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Lisitng #: <b>{product.id}</b></p>
                                    <p>Category: <b>{product.category}</b></p>
                                </div>
                                <div className="col-md-6">
                                    <p>Lister On: <b>{product.publishedAt}</b></p>
                                    <p>Closes On: <b>{product.age}</b></p>
                                </div>
                                <div className="col-md-12">
                                    <p className="location"><a href={product.googlemap} target="_blank"><i className="icon-map-marker"></i> {product.location}</a></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Renumeration or Salary(depends): <b>P{product.id}</b></p>
                                    <p>Job type: <b>{product.job_type}</b></p>
                                    <p>Job term: <b>{product.job_term}</b></p>
                                </div>
                                <div className="col-md-6">
                                    <p>Number of Candidates Needed: <b>{product.candidates_needed}</b></p>
                                    <p>Experience Level: <b>{product.experience_requirement}</b></p>
                                </div>
                                <div className="col-md-12">
                                    {product.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="white-bg">
                            <div className="pd-20px">
                                <h3>Company Name</h3>
                                <p>Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description</p>
                                <p>Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description</p>
                                <p>Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description</p>
                                <p>Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description Company Description</p>
                            </div>
                            <div className="pd-20px">
                                <div className="ads">
                                    <img src={`${imageURL}icon/icon_ongdom.png`}/>
                                </div>
                                <div className="ads">
                                    <img src={`${imageURL}icon/icon_laco.png`}/>
                                </div>
                                <div className="ps-product__rating">
                                    <Rating />
                                    <span>(2 review)</span>
                                </div>
                                {/*<ModuleDetailShoppingActions product={product} />*/}
                                <p>Share:</p>
                                <ModuleProductDetailSharing />
                                <ModuleDetailActionsMobile />
                                <ModuleGenerallistingShoppingActions/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="row">
                        <div className="col-md-8 white-bg">
                            <JobsDescription product={product} />
                        </div>
                        <div className="col-md-4">
                            <div className="ads_images"><img src={`${imageURL}ads/ads1.png`} width="100%" /></div>
                            <div className="ads_images"><img src={`${imageURL}ads/ads2.png`} width="100%" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct collectionSlug="blogs" />
            <CustomerBought layout="fullwidth" collectionSlug="blogs" />;
        </div>
    );
};

export default Jobs;
