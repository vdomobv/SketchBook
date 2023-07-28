import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: bold;
    text-align: center;
  }

  .btndiv{
    display: flex;
    justify-content: center;
  }

  .box {
    margin-top: 100px;
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 10%;    
  }

  li {
    font-size: 25px;
    line-height: 50px;
  }

  .btn {
    color: #a451f7;
    border-radius: 8px;
    border: 1px solid #a451f7;
    background-color: #ffffff;
    padding: 10px 20px;
  }
`;

export default Wrapper;
