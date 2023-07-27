// Components
import Header from "../../components/Header";

function Profile() {
  return <div>
    <Header />
    <h1>Profile</h1>
      <div>
        <h2>비밀번호 변경</h2>
      </div>
      <div>
        <h2>기기연결</h2>
        <p>기기 연결이 안되어 있어요.</p>
        <a href="">기기 연결하러 가기</a>
      </div>
      <img src="front-end\public\images\logo_with.png" alt="" />
  </div>;

}

export default Profile;
