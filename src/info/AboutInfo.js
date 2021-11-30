import React from "react";
import '../css/About.css'

const AboutInfo = () => {
    return (
        <div className="aboutInfo_background">
            <h1 className="about_h1">Detail</h1>
            <div className="about_container">
                <div className="about_left_side">
                    <h1>ZERO 5는 다양한 IT 기술들을 기존의 것들에 부착하여 새로운 서비스를
                        제공하는것을 목표로 하고 있습니다. </h1>
                    
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