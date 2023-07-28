import Header from "../../components/Header";
import Wrapper from "./styles";

function Guide() {
  return (
    <div>
      <Header />
      <Wrapper>
        <div className="box">
          <div className="header">
            <h2>
              스케치북, <span>어떻게</span> 이용하나요?
            </h2>
            <img src="" alt="" />
          </div>
          <ol>
            <li>
              기기 연결을 해주세요. 기기 연결을 아직 하지 않았다면, 아래 버튼을
              눌러주세요.
            </li>
            <li>책장에서 모험을 떠나고 싶은 동화를 선택해주세요.</li>
            <li>주인공을 따라 그림을 등록하고, 환경 설정을 해주세요.</li>
            <li>시작 가이드에 따라 그림을 등록하고, 환경 설정 해주세요.</li>
            <li>
              만약 기존 기기를 해제하고, 타 기기로 연결하고 싶다면 로그아웃
              해주세요.
            </li>
          </ol>
          <div className="btndiv">
            <button className="btn" type="button">
              기기 연결하기
            </button>
          </div>
        </div>
      </Wrapper>
      ;
    </div>
  );
}

export default Guide;
