import image from "../../../../play-background/엄마는 카멜레온_12.gif";
import audio12 from "../../../../play-background/ske_12.mp3";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

let email;

const Charactercam = (props) => {
  const [characterUrl, setcharacterUrl] = useState();
  const { setBottom, setLeft } = props;

  useEffect(() => {
    // 위치 정보 업데이트 함수
    const updatePosition = () => {
      axios
        .get("/api/devices/position")
        .then((res) => {
          email = res.data.email;
          const x_diff = parseFloat(res.data.x_diff);
          const y_diff = parseFloat(res.data.y_diff);

          setBottom((prevBottom) => prevBottom + y_diff );

          setLeft((prevLeft) => {
            const newLeft = prevLeft + x_diff + x_diff;
            if (newLeft < 0) return 0;
            else if (newLeft > 895) return 895;
            else return newLeft;
          });
        })
        .catch((err) => {
          return console.log("에러입니다.", err);
        });
    };

    // 컴포넌트 마운트 시 처음 한 번 호출
    updatePosition();

    // 10초마다 API 호출
    const interval = setInterval(updatePosition, 100);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, []);

  const fetchNewImage = () => {
    const timestamp = new Date().getTime();
    // setcharacterUrl(`/assets/assemble.png?timestamp=${timestamp}`); //local
    setcharacterUrl(`/user/${email}/assemble.png?timestamp=${timestamp}`); // 배포
  };

  useLayoutEffect(() => {
    fetchNewImage(); // 컴포넌트가 마운트될 때 이미지 가져오기
    const interval = setInterval(fetchNewImage, 100); // 200ms마다 이미지 업데이트
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  });

  return <img src={characterUrl} alt="" />;
};

function P12() {
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/devices/cleardiff")
      .then()
      .catch((err) => {
        return console.log("에러입니다.", err);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/play/story1/p13");
    }, 24000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div>
      <img className="back-ground" src={image} alt="" />
      <div
        className="character-cam"
        style={{
          left: `${left}px`,
          bottom: `${bottom}px`,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Charactercam setBottom={setBottom} setLeft={setLeft} />
      </div>

      <audio autoPlay>
        <source src={audio12} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default P12;
