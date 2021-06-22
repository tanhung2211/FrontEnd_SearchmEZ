import React from 'react';
import Link from 'next/link';

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            {/*<h3>Top categories of the month</h3>*/}
            <div className="row">
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/animals">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/animal.png" alt="searchmez" />
                        <p>Animals</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/auction">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/auction.png" alt="searchmez" />
                        <p>Auction</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/automobiles">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/automobile.png" alt="searchmez" />
                        <p>Automobiles</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/blogs">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/blog.png" alt="searchmez" />
                        <p>Blogs</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/booking">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/booking.png" alt="searchmez" />
                        <p>Booking</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/coupon">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/coupon.png" alt="searchmez" />
                        <p>Coupon</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/events">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/event.png" alt="searchmez" />
                        <p>Events</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/generallisting">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/generallisting.png" alt="searchmez" />
                        <p>General Listing</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/jobs">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/job.png" alt="searchmez" />
                        <p>Jobs</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/meetups">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/meetups.png" alt="searchmez" />
                        <p>Meetups</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/people">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/people.png" alt="searchmez" />
                        <p>People</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/places">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/places.png" alt="searchmez" />
                        <p>Places</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/realestate">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/realestate.png" alt="searchmez" />
                        <p>Real Estate</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/services">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/services.png" alt="searchmez" />
                        <p>Service Shop</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/stores">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/stores.png" alt="searchmez" />
                        <p>Stores</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/webdirectory">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/webdirectory.png" alt="searchmez" />
                        <p>Web Directory</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/apparels">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/apparels.png" alt="searchmez" />
                        <p>Apparels</p>
                    </div>
                </div>
                <div className="col">
                    <div className="ps-block--category">
                        <Link href="/category/edibles">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/edibles.png" alt="searchmez" />
                        <p>Edibles</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
