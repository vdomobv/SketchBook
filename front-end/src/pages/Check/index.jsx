import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import axios from "axios";

import Wrapper from "./styles";
import CheckStep from "../../components/CheckStep";
import check_audio from "../../play-background/check_narration.mp3";

let camUrl;

const Livecam = () => {
  const [imageUrl, setImageUrl] = useState(`/assets/livecam_loading.jpg`);
  let email;
  axios
    .get("/api/devices/mail")
    .then((res) => {
      email = res.data.email;  
    })
    .catch((err) => {
      return console.error(err);
    });

  const fetchNewImage = () => {
    const timestamp = new Date().getTime();
    setImageUrl(`/user/${email}/image.jpg?timestamp=${timestamp}`); // 배포
    camUrl = `/user/${email}/image.jpg?timestamp=${timestamp}`; // 배포
  };

  useEffect(() => {
    fetchNewImage(email); // 컴포넌트가 마운트될 때 이미지 가져오기
    const interval = setInterval(fetchNewImage, 100); // 200ms마다 이미지 업데이트
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  return <img src={imageUrl} className="overlay-livecam" alt="" />;
};

const Charactercam = () => {
  const [characterUrl, setcharacterUrl] = useState(`/assets/char_load.png`);
  let email;
  axios
    .get("/api/devices/mail")
    .then((res) => {
      email = res.data.email;
    })
    .catch((err) => {
      return console.error(err);
    });

  const fetchNewImage = () => {
    const timestamp = new Date().getTime();
    setcharacterUrl(`/user/${email}/assemble.png?timestamp=${timestamp}`); // 배포
  };

  useEffect(() => {
    fetchNewImage(email); // 컴포넌트가 마운트될 때 이미지 가져오기
    const interval = setInterval(fetchNewImage, 100); // 200ms마다 이미지 업데이트
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  return <img src={characterUrl} className="overlay-livecam" alt=""/>;
};

function Check() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeStep, setActiveStep] = useState(1);
  const audioRef = useRef(new Audio(check_audio));
  const navigate = useNavigate();

  const capture = () => {
    axios
      .post("/api/devices/capture", { camUrl: camUrl })
      .then((res) => {
        setActiveStep(2);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const mission = (e) => {
    setActiveStep(3);
    axios
      .post("/api/devices/mission", {
        flag: "1", // mission이 없으면 0 있으면 1
      })
      .then((res) => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (activeStep === 3) {
      audioRef.current.play(); // 스피커 사운드 시작
      // activeStep이 3일 때 7초 후에 자동으로 activeStep을 4로 변경하고 스피커 사운드 시작
      const timer = setTimeout(() => {
        setActiveStep(4);
      }, 7000); // 7초

      return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 클리어
    }
  }, [activeStep]);

  const goToReady = () => {
    const bookId = searchParams.get("bookId");
    navigate(`/ready?bookId=${bookId}`);
  };

  return (
    <Wrapper>
      <h1 className="check-title">시작하기 전, 확인해주세요!</h1>
      <div className="all">
        <div className="container">
          <CheckStep
            activeStep={activeStep}
            step={1}
            message={"그림 찍기"}
          ></CheckStep>
          <CheckStep
            activeStep={activeStep}
            step={2}
            message={"카메라 위치 확인하기"}
          ></CheckStep>
          <CheckStep
            activeStep={activeStep}
            step={3}
            message={"스피커 소리 확인하기"}
          ></CheckStep>
          <CheckStep
            activeStep={activeStep}
            step={4}
            message={"캐릭터 연동 확인하기"}
          ></CheckStep>
        </div>

        <div>
          {activeStep === 1 && (
            <>
              {/* 카메라 화면 : "user/[user_email]/image.jpg" */}
              <div className="image-wrapper">
                {/* livecam 로딩 페이지 */}
                <img src="/assets/livecam_loading.jpg" alt="" />
                <Livecam />
              </div>
              <button onClick={capture}>캡처하기</button>
            </>
          )}
          {activeStep === 2 && (
            <>
              <div className="image-wrapper">
                {/* livecam 로딩 페이지 */}
                <img className="loading" src="/assets/livecam_loading.jpg" alt=""/>
                <Livecam />
                {/* 위치 확인 guideline */}
                <img
                  className="guideline"
                  src="/assets/livecam_guideline.png"
                  alt=""
                />
              </div>
              <button onClick={mission}>위치 확인</button>
            </>
          )}
          {activeStep === 3 && (
            <>
              <div className="image-wrapper">
                <img src="/assets/check_speaker.jpg" alt=""/>
                <img className="loading_dot" src="/assets/loading_dot.png" alt=""/>
              </div>
            </>
          )}
          {activeStep === 4 && (
            <>
              <div className="image-wrapper">
                <img src="/assets/char_load.png" alt=""/>
                <Charactercam />
              </div>
              <button onClick={goToReady}>준비 완료</button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Check;
