// sytled_components
import Wrapper from "./styles";

// Components
import Header from "../../components/Header";

// Bootstrap
import Form from 'react-bootstrap/Form';

function Profile() {
  return <div>
    <Header />
    <Wrapper>
      <div className="grid box">
        <h2>비밀번호 <span>변경</span></h2>
        <Form>
          <Form.Group className="mt-5" controlId="Password">
            <Form.Control size="lg" className="my-3" type="text" placeholder="기존 비밀번호" />
            <Form.Control size="lg" className="my-3" type="text" placeholder="새로운 비밀번호" />
            <span className=""></span>
            <Form.Control size="lg" className="my-3" type="text" placeholder="새로운 비밀번호 확인" />
          </Form.Group>
          <Form.Control className="btn my-3" type="submit" value="변경하기" />
        </Form>
      </div>

      <div className="grid">
        <div className="box">
          <h2>기기 <span>연결</span></h2>
          <h5 className="my-3">기기 연결이 안되어 있어요.</h5>
          <h5><a href="/connect">기기 연결하러 가기</a></h5>
        </div>
        <img src={process.env.PUBLIC_URL + '/assets/logo_with.png'} alt="" />
      </div>
    </Wrapper>
  </div>;

}

export default Profile;
