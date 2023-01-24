import React from "react";

function Header(props) {
    const { id, content } = props;
    return (
        <div id="header">
            <header id={id}>{content}</header>
        </div>
    );
}

export default Header
