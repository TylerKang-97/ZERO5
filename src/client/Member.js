import React from "react";
import { useLocation, Link } from "react-router-dom";
import '../css/Team.css'

const Member = () => {
    const { pathname}  = useLocation();
    return(

        <div className="team_background" >
            <Link to='/member' style={{ textDecoration: 'none', color: 'black' }} >
            <h1 className="team_h1">Member</h1>
            <p>강신영 고영일 김찬영 송주영 김도영 김광현 김혜린 정도원 이유진</p>
            </Link>
        </div>

    );
}

export default Member;
