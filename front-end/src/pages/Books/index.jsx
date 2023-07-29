import React, { useState, useEffect } from 'react';

// styled_components
// import Wrapper from './styles';

// bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Components
import Header from "../../components/Header";
import BookCard from '../../components/BookCard';

// dummy-data
import bookData from '../../dummy-data/bookData';

function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookData);
  }, []);

  return <div>
    <Header />
    <br />
    <h4>검색기능 넣을겁니당</h4>
    <br />
    <div class="container">
      <Row xs={1} md={1} lg={2} xl={3} className="g-4">
        {books.map((book) => (
          <Col key={book.id}>
            <BookCard book={book} />
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
