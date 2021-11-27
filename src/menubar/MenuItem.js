import React from "react";
import '../css/Menubar.css'

function MenuItem({menu}) {
    return (
        <div>
            <p>{menu.name}</p>
        </div>
    )
}

export default MenuItem;