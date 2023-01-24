import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div className="container">
            <header id="my-header" content="This is the header"/>
            <main id="my-main" content="This is the main"/>
            <footer id="my-footer" content="This is the footer"/>
        </div>
    );
}

export default App;
