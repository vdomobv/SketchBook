// import { useState} from 'react';

// styled_components
// import Wrapper from './styles';

// bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Components
import Header from "../../components/Header";

function Books() {
  return <div>
    <Header />
    <h1>Books</h1>
    <p>검색기능 넣을겁니당</p>
  <br />

{/* 카드 형식 */}
<div class="container">
    <Row xs={1} md={2} lg={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '25rem' }}>
            {/* 책 표지 */}
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>제목 입니당</Card.Title>  
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</div>
    {/* <Wrapper>

    </Wrapper> */}

  </div>;
}

export default Books;
