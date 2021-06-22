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
import HomeGetListing from "~/components/partials/homepage/home-default/HomeGetListing";

const HomepageDefaultPage = () => {
    return (
        <ContainerHomeDefault title="Multipurpose Marketplace">
            <HomeDefaultBanner />
            <HomeDefaultTopCategories />
            {/*<BestSaleItems*/}
            {/*    collectionSlug="consumer-electronics"*/}
            {/*    title="Consumer Electronics"*/}
            {/*/>*/}
            {/*<HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />*/}

            <HomeGetListing
                collectionSlug="booking"
                title="Hire someone for your project"
            />
            <HomeAdsColumns />
            <HomeGetListing
                collectionSlug="animals"
                title="Apply and don't miss out the oppurtunity"
            />
            <HomeGetListing
                collectionSlug="realestate"
                title="Find your dream house"
            />
            <HomeGetListing
                collectionSlug="automobiles"
                title="Recent a place or a car"
            />

            <HomeAds />
                <HomeGetListing
                    collectionSlug="blogs"
                    title="Read and learn something interesting"
                />
                <HomeGetListing
                    collectionSlug="services"
                    title="Discover and book your next destination"
                />


            <HomeGetListing
                collectionSlug="animals"
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
