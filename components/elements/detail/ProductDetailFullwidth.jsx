import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import JobsDescription from "~/components/elements/detail/description/JobsDescription";
import {imageURL} from "~/repositories/Repository";
import AnimalstDescription from "~/components/elements/detail/description/AnimalsDescription";
import ModuleGenerallistingShoppingActions
    from "~/components/elements/detail/modules/ModuleGenerallistingShoppingActions";

const ProductDetailFullwidth = ({ product }) => {
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailDefault product={product} />
                <div className="ps-product__info">
                    <ModuleDetailTopInformation product={product} />
                    <ModuleProductDetailDescription product={product} />
                    <ModuleDetailShoppingActions product={product} />
                    <p>Share:</p>
                    <ModuleProductDetailSharing />
                    <ModuleDetailActionsMobile />
                </div>
            </div>
            <div className="mt-20">
                <div className="row">
                    <div className="col-md-8 white-bg">
                        <AnimalstDescription product={product} />
                    </div>
                    <div className="col-md-4">
                        <div className="ads_images"><img src={`${imageURL}ads/ads1.png`} width="100%" /></div>
                        <div className="ads_images"><img src={`${imageURL}ads/ads2.png`} width="100%" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailFullwidth;
