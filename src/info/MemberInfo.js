import React from "react";

import '../css/Team.css'

const MemberInfo = ({id}) => {

    return(
        <div className="team_info_background">
            <h1 className="team_h1">Member Info pages{id}</h1>
        </div>
        
    );
}
export default MemberInfo;