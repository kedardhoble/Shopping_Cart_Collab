// src/pages/details/Details.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch item details');
        }
        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!item) {
    return <p>No item found.</p>;
  }

  return (
    <Container>
      <h1>{item.name}</h1>
      <Row>
        <Col md={6}>
          <img src={item.imgUrl} alt={item.name} style={{ maxWidth: '100%' }} />
        </Col>
        <Col md={6}>
          <p>{item.description}</p>
          <h3>Price: {item.price}</h3>
          <Button variant="primary">Add to Cart</Button>
          {/* Additional details */}
          <p><strong>Category:</strong> {item.category}</p>
          {item.manufacturer && <p><strong>Manufacturer:</strong> {item.manufacturer}</p>}
          {item.expiryDate && <p><strong>Expiry Date:</strong> {item.expiryDate}</p>}
          {item.weight && <p><strong>Weight:</strong> {item.weight}</p>}
          {item.brand && <p><strong>Brand:</strong> {item.brand}</p>}
          {item.model && <p><strong>Model:</strong> {item.model}</p>}
          {item.specs && (
            <div>
              <h4>Specifications:</h4>
              <ul>
                {Object.entries(item.specs).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          )}
          {item.publisher && <p><strong>Publisher:</strong> {item.publisher}</p>}
          {item.author && <p><strong>Author:</strong> {item.author}</p>}
          {item.pages && <p><strong>Pages:</strong> {item.pages}</p>}
          {item.language && <p><strong>Language:</strong> {item.language}</p>}
          {item.contents && (
            <div>
              <h4>Contents:</h4>
              <ul>
                {item.contents.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
