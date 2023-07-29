import Modal from "react-modal";

function PasswordModal(props) {
  return (
    <div>
      <Modal isOpen={props.isModalOpen}>
        This is Modal content
      </Modal>
    </div>
  );
}

export default PasswordModal;
