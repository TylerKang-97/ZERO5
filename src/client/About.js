import React , { useEffect, useState} from "react";
import { useLocation, Link } from "react-router-dom";
import AboutInfo from "../info/AboutInfo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/About.css'

const About = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return(
        <>
        <div className="about_background">
            <Link to="/about" style={{ textDecoration: 'none', color: 'oldlace' }}>
            <h1 className="about_h1">About</h1>
            <p>ZERO 5는 부착형 스마트 카트모듈을 제작중인 창업팀입니다.</p>
            </Link>
            <Slider {...settings}>
                
                    <div className="about_carousel">
                    <h3 className="about_carousel_h1">S.S.A.C</h3>
                    <p className="about_carousel_p">부착형 스마트 카트 모듈</p>
                    </div>
                    
                    <div className="about_carousel">
                    <h3 className="about_carousel_h1">Box Farmers</h3>
                    <p className="about_carousel_p">교육용 자동 식물 재배 키트</p>
                    </div>

                    <div className="about_carousel">
                    <h3 className="about_carousel_h1">명글 카메라</h3>
                    <p className="about_carousel_p">OCR(광학 문자 인식) 기법을 이용한 안드로이드 APP</p>
                    </div>

                    <div className="about_carousel">
                    <h3 className="about_carousel_h1">Movie Salon</h3>
                    <p className="about_carousel_p">영화 정보 웹페이지</p>
                    </div>

                    <div className="about_carousel">
                    <h3 className="about_carousel_h1">디지털 점자책</h3>
                    <p className="about_carousel_p">스마트폰과 점자모듈을 결합한 보조 시스템</p>
                    </div>

                    
                
      </Slider>
        </div>
        {pathname === '/about' ? <AboutInfo /> : null }
        {/*
        url에 따라 Info 정보를 노출시킬지 결정해야함 
        ex) Home에서는 About.js만 디스플레이 시켜야 하며 About에서는 
        About.js와 AboutInfo.js 두 컴포넌트를 표시해야 한다. 이를 현재 url 경로명에 따라서
        표시할 수 있도록 함
        */}
        
        </>
    );


}

export default About;