import React, { useState, useEffect } from 'react';

// styled_components
// import Wrapper from './styles';

// bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Components
import Header from "../../components/Header";

// dummy-data
import bookData from '../../dummy-data/bookData';

function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData);
  }, []);

  return <div>
    <Header />
    <h3>검색기능 넣을겁니당</h3>
    <br />
    <div class="container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {books.map((book) => (
          <Col key={book.id}>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={book.bookcover} style={{ width: '25rem', height: '30rem' }} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <br />
    {/* <Wrapper>
    </Wrapper> */}
  </div>;
}

export default Books;
