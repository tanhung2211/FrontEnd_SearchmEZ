import React from 'react';
import Head from 'next/head';
import NavigationList from '~/components/shared/navigation/NavigationList';
import SiteFeatures from '~/components/partials/homepage/autopart/SiteFeatures';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import HeaderElectronic from '~/components/shared/headers/HeaderElectronic';
import HeaderMobileElectronic from '~/components/shared/headers/HeaderMobileElectronic';
import HeaderMarketPlace4 from "~/components/shared/headers/HeaderMarketPlace4";

const ContainerHomeElectronics = ({ children, title = 'Home Electronics' }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderMarketPlace4 />
            <HeaderMobileElectronic />
            <NavigationList />
            {/* <SubscribePopup active={subscribe} />*/}
            <main id="homepage-7">
                {children}
                <SiteFeatures />
            </main>
            <FooterDefault />
        </div>
    );
};

export default ContainerHomeElectronics;
