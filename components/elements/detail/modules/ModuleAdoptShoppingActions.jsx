import React, { useState } from 'react';
import { addItem } from '~/store/cart/action';
import { addItemToCompare } from '~/store/compare/action';
import { addItemToWishlist } from '~/store/wishlist/action';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const ModuleAdoptShoppingActions = ({ product, extended = false }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const Router = useRouter();

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tmp = product;
        tmp.quantity = quantity;
        dispatch(addItem(tmp));
    };

    const handleBuynow = (e) => {
        e.preventDefault();
        let tmp = product;
        tmp.quantity = quantity;
        dispatch(addItem(tmp));
        setTimeout(function () {
            Router.push('/account/checkout');
        }, 1000);
    };

    const handleAddItemToCompare = (e) => {
        e.preventDefault();
        dispatch(addItemToCompare(product));
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        const { product } = this.props;
        dispatch(addItemToWishlist(product));
    };

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    if (!extended) {
        return (
            <div className="ps-product__adopt">
                <figure>
                    <div className="form-group--number">
                        <input
                            className="form-control"
                            type="hidden"
                            placeholder={quantity}
                            value={1}
                        />
                    </div>
                </figure>
                <a
                    className="ps-btn adopt"
                    href="#"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Adopt Now
                </a>
            </div>
        );
    } else {
        return (
            <div className="ps-product__adopt extend">
                <div className="ps-product__btn-group">
                    <figure>
                        <div className="form-group--number">
                            <input
                                className="form-control"
                                type="hidden"
                                placeholder={quantity}
                                value={1}
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn adopt"
                        href="#"
                        onClick={(e) => handleAddItemToCart(e)}>
                        Adopt Now
                    </a>

                </div>

            </div>
        );
    }
};

export default ModuleAdoptShoppingActions;
