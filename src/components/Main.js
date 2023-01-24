import React from "react";

const {id , content} = props;
return(
    <div id="main">
        <main id={id}>{content}</main> 
    </div>
);

export default Main
