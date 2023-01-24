import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div id="container">
            <Header id="my-header" content="This is the header"/>
            <Main id="my-main" content="This is the main"/>
            <Footer id="my-footer" content="This is the footer"/>
        </div>
    );
}

export default App;
