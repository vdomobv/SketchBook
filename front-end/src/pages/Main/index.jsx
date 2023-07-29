import { useState } from 'react';

import Wrapper from './styles';
import PasswordModal from '../../components/PasswordModal';

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    console.log('handleModal');
    setIsModalOpen(true);
  }

  return (
    <Wrapper className='root'>
      <h1>Main</h1>
      <span onClick={handleModal} >test</span>
      <PasswordModal isModalOpen={isModalOpen} />

    </Wrapper>);
}

export default Main;
