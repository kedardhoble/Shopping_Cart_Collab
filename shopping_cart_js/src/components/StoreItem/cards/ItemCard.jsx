import React, { useState } from 'react'
import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../../../utility/formatCurrency.jsx"
// import banana from "../../../assets/images/banana.jpg"
const ItemCard = ({ data, quantity, setQuantity }) => {
    const { name, price, imgUrl } = data
    const [itemQuantity,setItemQuantity] =useState(0);

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
                    {itemQuantity === 0 ?
                        <Button className="w-100" onClick={() => { setItemQuantity(quantity => quantity + 1) }}>+ Add To Cart</Button> :
                        (<div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content" style={{ gap: ".5rem" }}
                            >
                                <Button onClick={() => { setItemQuantity(quantity => quantity - 1) }}>-</Button>
                                <div>
                                    <span className="fs-3">{itemQuantity}</span>in cart
                                </div>
                                <Button onClick={() => { setItemQuantity(quantity => quantity + 1) }}>+</Button>
                            </div>
                            <Button onClick={() => { setItemQuantity(0) }} variant="danger" size="sm">
                                Remove
                            </Button>
                        </div>
                        )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemCard
