import React, {useEffect, useState} from "react";
import { useLocation, Link } from "react-router-dom";
import '../css/Team.css'
import MemberInfo from "../info/MemberInfo";

const Member = () => {

    const [id, setId] = useState("");
    const { pathname}  = useLocation();
    const onclickes = (e) => {
        let id = e.target.__reactProps$m3yb4nwemhk.children[0];
        console.log(e.target.__reactProps$m3yb4nwemhk.children[0]);

        setId(id);
        console.log('id', id);
    }
    const teams = [
        { name: '강신영', id: 1 },
        {name: '고영일', id: 2},
        {name: '송주영', id: 3},
        {name: '김찬영', id: 4},
        {name: '김도영', id: 5},
        {name: '김혜린', id: 6},
        {name: '김광현', id: 7},
        {name: '정도원', id: 8},
        {name: '이유잔', id: 9},
    ];

    return(
        <>
        {console.log(teams)}
        <div className="team_background" >
            <Link to='/member' style={{ textDecoration: 'none', color: 'black' }} >
            <h1 className="team_h1">Member</h1>
            {teams.map((t) => (
                <span onClick={onclickes}>{t.name} &nbsp; </span>
            ))}
            </Link>
        </div>
        {pathname === '/member' ? <MemberInfo id={id} /> : null}
        </>
    );
}

export default Member;
