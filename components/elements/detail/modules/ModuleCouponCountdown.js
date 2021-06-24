import React from 'react';
import CountDown from '~/components/elements/CountDown';

const ModuleCouponCountdown = () => {
    return (
        <div className="ps-product__countdown">
            <figure>
                <figcaption>
                    Download one before:
                </figcaption>
                <CountDown
                    timeTillDate="12 31 2020, 6:00 am"
                    timeFormat="MM DD YYYY, h:mm a"
                />
            </figure>
        </div>
    );
};
export default ModuleCouponCountdown;
