import React from 'react';
import logo from "../img/banner/logo.png";
import nav_search from "../img/banner/nav_search.png";
import nav_collection from "../img/banner/nav_collection.png";

const Header = () => {
    return (
        <header className="header">
                <div className="container">
                    <div className="header_inner">
                        <div className="logo"><img src={logo}/></div>
                        <nav className="nav">
                            <div className="nav_item"><img className="nav_img" src={nav_search}/>Search</div>
                            <div className="nav_item">Collection<img className="nav_img" src={nav_collection}/>
                            </div>
                        </nav>
                    </div>
                </div>
        </header>
    )
}

export default Header;