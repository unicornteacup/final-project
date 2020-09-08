import React,{useState} from 'react';
import './slider.scss'
import ImgComp from './ImgComp'
import i1 from "../images/1.png"
import i2 from "../images/2.png"
import i3 from "../images/3.png"
import i4 from "../images/4.png"

function Slider(){

    let sliderArr = [ 
    <ImgComp src={i1}/>, 
    <ImgComp src={i2}/>, 
    <ImgComp src={i3}/>, 
    <ImgComp src={i4}/> ]

    const[x,setX] = useState(0)
    const goLeft= () => {
        (x=== 0? setX(-100*(sliderArr.length -1)):setX(x+100));
    };
    const goRight=() => {
        (x=== -100*(sliderArr.length -1))?setX(0):setX(x-100);
    };

    return (
        <div className="slider">
            {
                sliderArr.map((item,index) => {
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%`}}>
                            {item}
                            </div>
                    );
                })}
                <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
                   </button>
                <button id="goRight" onClick={goRight}>
                    <i class="fas fa-chevron-left"></i>
                    </button>
        </div>
    )
}

export default Slider;