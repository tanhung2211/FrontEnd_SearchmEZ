import React from 'react';
import Link from 'next/link';

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            {/*<h3>Top categories of the month</h3>*/}
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/animals">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/animal.png" alt="martfury" />
                        <p>Animals</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/auction">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/auction.png" alt="martfury" />
                        <p>Auction</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/automobiles">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/automobile.png" alt="martfury" />
                        <p>Automobiles</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/blogs">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/blog.png" alt="martfury" />
                        <p>Blogs</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/booking">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/booking.png" alt="martfury" />
                        <p>Booking</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/coupon">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/coupon.png" alt="martfury" />
                        <p>Coupon</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/events">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/event.png" alt="martfury" />
                        <p>Events</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/generallisting">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/generallisting.png" alt="martfury" />
                        <p>General Listing</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/jobs">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/job.png" alt="martfury" />
                        <p>Jobs</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/meetups">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/meetups.png" alt="martfury" />
                        <p>Meetups</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/people">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/people.png" alt="martfury" />
                        <p>People</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/places">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/places.png" alt="martfury" />
                        <p>Places</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/realestate">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/realestate.png" alt="martfury" />
                        <p>Real Estate</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/services">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/services.png" alt="martfury" />
                        <p>Service Shop</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/stores">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/stores.png" alt="martfury" />
                        <p>Stores</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/category/webdirectory">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/searchmez/webdirectory.png" alt="martfury" />
                        <p>Web Directory</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
