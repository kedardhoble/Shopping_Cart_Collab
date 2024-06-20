// src/pages/home/Home.jsx
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <Container className="home">
      {/* Hero Section */}
      <section className="hero-section text-center my-5">
        <h1>Welcome to Our Store!</h1>
        <p>Discover the best products at unbeatable prices.</p>
        <Link to="/store">
          <Button variant="primary" size="lg">Shop Now</Button>
        </Link>
      </section>

      {/* Featured Categories */}
      {/* <section className="featured-categories my-5">
        <h2>Featured Categories</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" />
              <Card.Body>
                <Card.Title>Grocery</Card.Title>
                <Link to="/store">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" />
              <Card.Body>
                <Card.Title>Electronics</Card.Title>
                <Link to="/store">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Vehicles</Card.Title>
                <Link to="/store">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Link to="/store">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section> */}

      {/* Top Products */}
      <section className="top-products my-5">
        <h2>Top Products</h2>
        <Row>
          {/* Add a few top product cards here */}
          {/* Example Card */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" />
              <Card.Body>
                <Card.Title>Grocery</Card.Title>
                <Card.Text>Get Fresh Grocerries</Card.Text>
                <Link to="/store">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more cards as needed */}
        </Row>
      </section>

      {/* Promotional Offers */}
      <section className="promotional-offers my-5">
        <h2>Promotional Offers</h2>
        <Row>
          <Col md={6}>
            <Card className="bg-light text-center">
              <Card.Body>
                <Card.Title>Special Offer!</Card.Title>
                <Card.Text>Get 20% off on all seasonal fruits.</Card.Text>
                <Link to="/store">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="bg-light text-center">
              <Card.Body>
                <Card.Title>Free Shipping!</Card.Title>
                <Card.Text>Free shipping on orders over ₹500.</Card.Text>
                <Link to="/store">
                  <Button variant="primary">Shop Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Customer Testimonials */}
      <section className="customer-testimonials my-5">
        <h2>What Our Customers Say</h2>
        <Row>
          <Col md={4}>
            <Card className="bg-light">
              <Card.Body>
                <Card.Text>"Great products and fantastic customer service!"</Card.Text>
                <Card.Footer>- Saurabh Jaybhay</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-light">
              <Card.Body>
                <Card.Text>"Fast delivery and excellent quality. Highly recommend!"</Card.Text>
                <Card.Footer>- Shreeraj Mhatre</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-light">
              <Card.Body>
                <Card.Text>"Amazing deals and offers. I love shopping here!"</Card.Text>
                <Card.Footer>- Harshpreet Kaur</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup my-5 text-center">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to get the latest updates and offers.</p>
        <form>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <input type="email" className="form-control" placeholder="Enter your email" />
              <Button variant="primary" className="mt-2">Subscribe</Button>
            </Col>
          </Row>
        </form>
      </section>
    </Container>
  );
};

export default Home;
