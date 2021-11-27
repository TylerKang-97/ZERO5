import React , { useEffect, useState} from "react";
import { useLocation, Link } from "react-router-dom";
import AboutInfo from "../info/AboutInfo";
import '../css/About.css'

const About = () => {
    const { pathname } = useLocation();
    console.log(pathname);

    return(
        <>
        <div className="about_background">
            <Link to="/about" style={{ textDecoration: 'none', color: 'oldlace' }}>
            <h1 className="about_h1">About</h1>
            <p>ZERO 5는 부착형 스마트 카트모듈을 제작중인 창업팀입니다.</p>
            </Link>
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