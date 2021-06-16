import React from 'react';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy;  2021 SearchmEZ. All Rights Reserved</p>
        <ul className="ps-list--social">
            <li>
                <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                </a>
            </li>
            <li>
                <a className="google-plus" href="#">
                    <i className="fa fa-google-plus"></i>
                </a>
            </li>
            <li>
                <a className="instagram" href="#">
                    <i className="fa fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
);

export default FooterCopyright;
