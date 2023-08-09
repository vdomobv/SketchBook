import Wrapper from "./styles";
import image from '../../../../play-background/엄마는 카멜레온_12.gif';
import audio12 from '../../../../play-background/ske_12.mp3';
import { useNavigate } from "react-router";

function P12() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/play/story1/p13');
      }, 24000);

    return (
        <Wrapper>
            <img src={image} alt="" />
            <audio autoPlay>
                <source src={audio12} type="audio/mp3" />
            </audio>  
        </Wrapper>
    )
}

export default P12;
