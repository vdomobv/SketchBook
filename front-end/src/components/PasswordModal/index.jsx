import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Wrapper from './styles';

function PasswordModal(props) {

  return (

    <Modal show={props.isModalOpen} onHide={props.closeModal} centered>
      <Wrapper
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h4>비밀번호 찾기</h4>
          <p>
            계정에 등록된 이메일을 입력하시면 <br />
            이메일로 임시 비밀번호를 보내드려요.
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="이메일 주소"
                autoFocus
              />
            </Form.Group>
          </Form>
          <button className='sendBtn' type="button" onClick={props.closeModal}>
            이메일로 임시비밀번호 받기
          </button>
        </Modal.Body>
      </Wrapper>
    </Modal>
  );
}

export default PasswordModal;
