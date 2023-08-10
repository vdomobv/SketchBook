import styled from "styled-components";

const Wrapper = styled.div`

font-family: 'Pretendard-Regular';
display: flex;
flex-direction: column;
align-items: center; /* 세로 중앙 정렬 */
justify-content: center; /* 가로 중앙 정렬 */
height: 90vh;

.box-name {
  font-size: 25px;
}  

.box .one{
  width: 300px;
  height: 300px;
}

.box .two{
  width: 300px;
  height: 300px;
}

.box .three{
  width: 300px;
  height: 300px;
}

.box .four{
  width: 300px;
  height: 300px;
}

h1 {
  font-weight: bold;
  margin-bottom: 40px;
  font-size: 35px;
}

.boxes {
  display: flex;
  justify-content: space-between;
}

.box {
  width: 300px;
  height: 400px;
  background-color: #F8F8F8;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
}

.box.active img {
  opacity: 0.1; /* 이미지 투명도 조정 */
}

.box.active .box-name {
  color: white;
}

.box.active {
  background-color: #333;
  color: white;
}

.description {
  position: absolute;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
}
  
  .btndiv{
    display: flex;
    justify-content: center; 
  }

  button {
    color: #a451f7;
    border-radius: 8px;
    border: 1px solid #a451f7;
    background-color: #ffffff;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 20px;
    width : 177px;
  }

  .timerCount{
    text-align: center;
    margin-top : 20px;
    font-size: 60px;
    font-weight: bold;
  }
  `;
  
  export default Wrapper;
