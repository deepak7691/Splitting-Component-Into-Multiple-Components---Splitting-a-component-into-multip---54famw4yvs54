import React from "react";

const {id , content} = props;
return(
    <div id="footer">
        <footer id={id}>{content}</footer> 
    </div>
);

export default Footer