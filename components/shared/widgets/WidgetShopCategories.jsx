import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WidgetShopCategories = () => {
    const Router = useRouter();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);

    const { slug } = Router.query;

    async function getCategories() {
        setLoading(true);
        // const responseData = await ProductRepository.getProductCategories();
        // console.log(responseData);
        const responseData = [
            {'slug' : 'animals', 'name' : 'Animals'},
            {'slug' : 'auction', 'name' : 'Auction'},
            {'slug' : 'automobiles', 'name' : 'Automobiles'},
            {'slug' : 'blogs', 'name' : 'Blogs'},
            {'slug' : 'booking', 'name' : 'Booking'},
            {'slug' : 'coupon', 'name' : 'Coupon'},
            {'slug' : 'events', 'name' : 'Events'},
            {'slug' : 'generallisting', 'name' : 'General Listing'},
            {'slug' : 'jobs', 'name' : 'Jobs'},
            {'slug' : 'meetups', 'name' : 'Meetups'},
            {'slug' : 'people', 'name' : 'People'},
            {'slug' : 'places', 'name' : 'Places'},
            {'slug' : 'realestate', 'name' : 'Real Estate'},
            {'slug' : 'services', 'name' : 'Service Shop'},
            {'slug' : 'stores', 'name' : 'Stores'},
            {'slug' : 'webdirectory', 'name' : 'Web Directory'},
        ];
        if (responseData) {
            setCategories(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.slug}
                    className={item.slug === slug ? 'active' : ''}>
                    <Link href={`/category/${item.slug}`}>{item.name}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Loading...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Listing</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetShopCategories;
