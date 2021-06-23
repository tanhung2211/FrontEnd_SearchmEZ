import React from 'react';
import CountDown from '~/components/elements/CountDown';

const ModuleAuctionCountdown = () => {
    return (
        <div className="ps-product__countdown">
            <figure>
                <figcaption>
                    Auction Closes on:
                </figcaption>
                <CountDown
                    timeTillDate="12 31 2020, 6:00 am"
                    timeFormat="MM DD YYYY, h:mm a"
                />
            </figure>
        </div>
    );
};
export default ModuleAuctionCountdown;
