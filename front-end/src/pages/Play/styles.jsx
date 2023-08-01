import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 세로 전체 높이에 맞게 설정합니다. */  

  .image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* 이미지가 비율을 유지한 채로 화면에 맞게 표시됩니다. */
  }

  .numbering {
    display: flex;
    align-items: center;
    // font-size: 100px;
    // font-weight: 700;
  }

  .arrow {
    cursor: pointer;
    font-size: 30px;
    margin: 0 20px 0 20px;
  }
`;

export default Wrapper;