import React, { useEffect } from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import BestSaleItems from "~/components/partials/shop/modules/BestSaleItems";

const HomepageDefaultPage = () => {
    return (
        <ContainerHomeDefault title="Multipurpose Marketplace">
            <HomeDefaultBanner />
            <HomeDefaultTopCategories />
            <BestSaleItems
                collectionSlug="consumer-electronics"
                title="Consumer Electronics"
            />
            <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />

            <HomeDefaultProductListing
                collectionSlug="consumer-electronics"
                title="Hire someone for your project"
            />
            <HomeAdsColumns />
            <HomeDefaultProductListing
                collectionSlug="clothings"
                title="Apply and don't miss out the oppurtunity"
            />
            <HomeDefaultProductListing
                collectionSlug="garden-and-kitchen"
                title="Find your dream house"
            />
                <HomeDefaultProductListing
                    collectionSlug="garden-and-kitchen"
                    title="Recent a place or a car"
                />
            <HomeAds />
            <HomeDefaultProductListing
                collectionSlug="garden-and-kitchen"
                title="Read and learn something interesting"
            />
            <HomeDefaultProductListing
                collectionSlug="garden-and-kitchen"
                title="Discover and book your next destination"
            />
            <HomeDefaultProductListing
                collectionSlug="garden-and-kitchen"
                title="Other things you should be looking for"
            />
            {/*<DownLoadApp />*/}
            {/*<NewArrivals collectionSlug="new-arrivals-products" />*/}
            {/*<Newletters />*/}
            {/*<SiteFeatures />*/}
        </ContainerHomeDefault>
    );
};

export default HomepageDefaultPage;
