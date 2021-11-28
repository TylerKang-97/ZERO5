import React from "react";
import '../css/About.css'

const AboutInfo = () => {
    return (
        <div className="aboutInfo_background">
            <h1 className="about_h1">Detail</h1>
            <div className="about_container">
                <div className="about_left_side">
                    <h1>똑똑한 서비스를 쉽고 간편하게 제공하다!</h1>
                    <h1>다양한 IT기술들을 기존에 것들에 부착하여 새로운 서비스를!</h1>
                </div>
                <div className="about_right_side">
                    <h2>2021.04 팀개설</h2>
                    <h2>2021.11 청년창업프로그램 선정</h2>
                </div>
            
            </div>
            
        </div>
        
    );
}

export default AboutInfo;