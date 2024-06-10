import React, { useEffect, useState } from 'react';
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../../../utility/formatCurrency.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../../redux/slice/cartSlice.js';

const ItemCard = ({ data }) => {
    const { id, name, price, imgUrl } = data;
    const cartData = useSelector((state) => state.cartData.items);
    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // Check if the item is already in the cart
        const isAdded = cartData.some((item) => item.id === id);
        setAdded(isAdded);
    }, [cartData, id]);

    const addItem = (item) => {
        dispatch(addItemToCart(item));
    };

    const removeItem = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                alt={imgUrl}
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {added ? (
                        <Button className="btn btn-danger w-100" onClick={() => removeItem(id)}>
                            Remove
                        </Button>
                    ) : (
                        <Button className="w-100" onClick={() => addItem(data)}>
                            + Add To Cart
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;
