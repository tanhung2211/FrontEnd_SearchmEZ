import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <img src="/static/img/footer_logo.png"/>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Useful links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="#">
                        <a>Listers</a>
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <a>Future Careers</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Personality Quest</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Quizzes and Tests</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Surveys</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Website Services</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Forum</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/faqs">
                        <a>FAQs</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Important Links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="#">
                        <a>Sitemap</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Terms and Conditions</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Privacy Policay</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Contacts</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="#">
                        <a>Address</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Phone</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Email</a>
                    </Link>
                </li>
            </ul>

        </aside>
    </div>
);

export default FooterWidgets;
