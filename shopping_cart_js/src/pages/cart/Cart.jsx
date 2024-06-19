import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from '../../utility/formatCurrency.jsx';
import { removeItemFromCart, selectCartItems, getCartPrice, selectCartTotalQuantity } from '../../redux/slice/cartSlice.js';
import './Cart.css';
import { Button, Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';

const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const totalQuantity = useSelector(selectCartTotalQuantity);
    const totalPrice = useSelector(getCartPrice);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart(id));
      };

  return (
    <Container className="cart">
      <h1 className="text-center my-4">Shopping Cart</h1>
      {totalQuantity === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="cart-item mb-3">
                <Row className="align-items-center">
                  <Col md={2}>
                    <Image src={item.imgUrl} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                  </Col>
                  <Col md={3}>
                    <h5>{formatCurrency(item.price)}</h5>
                  </Col>
                  <Col md={2}>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card className="mt-4">
            <Card.Body>
              <Row>
                <Col md={6}><h3>Total Quantity: {totalQuantity}</h3></Col>
                <Col md={6}><h3>Total Price: {formatCurrency(totalPrice)}</h3></Col>
              </Row>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Cart;

