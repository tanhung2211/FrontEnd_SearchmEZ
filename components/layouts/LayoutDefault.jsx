import React from 'react';
import Head from 'next/head';
/*import WPHeaderMobile from '~/wp-components/shared/mobile/WPHeaderMobile';*/
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '~/components/partials/commons/Newletters';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import NavigationList from '~/components/shared/navigation/NavigationList';
import HeaderMarketPlace4 from "~/components/shared/headers/HeaderMarketPlace4";

const LayoutDefault = ({ children, title }) => {
    let titleView;
    if (title !== undefined) {
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
            <NavigationList />
            {children}
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default LayoutDefault;
