import Header from "../../components/Header";
import Wrapper from "./styles";

function Connect() {
  return <>
    <Header />
    <Wrapper>
      <div className="box">
        <h2>
          기기연결, <span>어떻게</span> 하나요?
          <img src={process.env.PUBLIC_URL + '/assets/emoji.png'} alt="" />
        </h2>
        <ol>
          <li>
            기기의 전원을 켜주세요.
          </li>
          <li>기기에 와이파이를 연결해주세요.</li>
          <li>웹 페이지의 OTP 생성하기 버튼을 눌러 OTP 번호를 확인해주세요.</li>
          <li>기기의 키패드에 해당 OTP 번호를 입력해주세요.</li>
        </ol>
        <div className="btndiv">
            <button type="button">
              OTP 생성하기
            </button>
        </div>
      </div>
    </Wrapper>
  </>;
}

export default Connect;
