import React, { useState, useEffect, useCallback } from 'react';
import Wrapper from './styles';

const imagesCount = 17; // 이미지의 총 개수

function Play() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useCallback으로 handleNextImage 함수 감싸기
  const handleNextImage = useCallback(() => {
    if (currentImageIndex === imagesCount - 1) {
      // 마지막 이미지일 경우
      alert('마지막 페이지에요.');
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentImageIndex]);

  // useCallback으로 handlePrevImage 함수 감싸기
  const handlePrevImage = useCallback(() => {
    if (currentImageIndex === 0) {
      // 첫 번째 이미지일 경우
      alert('첫 페이지에요.');
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentImageIndex]);

  const imageSource = `./assets/play-background/엄마는카멜레온_${currentImageIndex}.jpg`;

  // 전역으로 keydown 이벤트를 감지하여 이미지 이동 처리
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex, handleNextImage, handlePrevImage]);

  // Full Screen 모드로 전환하는 함수
  const enterFullScreen = () => {
    const element = document.documentElement; // HTML 요소를 가져옴

    // Full Screen API를 사용하여 전체 화면으로 전환
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  return (
    <Wrapper>
      <div className="image-container">
        <img src={imageSource} alt={`엄마는카멜레온_${currentImageIndex}`} />
      </div>
      <div className='numbering'>
        <div className="arrow" onClick={handlePrevImage}>
          &larr;
        </div>
        <div>{currentImageIndex + 1}/{imagesCount}</div>
        <div className="arrow" onClick={handleNextImage}>
          &rarr;
        </div>
        <button onClick={enterFullScreen}>전체 화면 보기</button> {/* 전체 화면 보기 버튼 */}
      </div>
    </Wrapper>
  );
}

export default Play;
