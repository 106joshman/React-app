import React from 'react';
import "./Header.css";
import { FaSistrix } from "react-icons/fa";


const Header = () => {

    return(
        <header className="header">
            <div className="header-logo"><span>D</span>ev-<span>G</span>uy</div>
            
            <form action="get" className="header-search">
                <div className="search">
                    <input type="text" className="header-form-input" placeholder="Search here"/>
                    <button type="submit"><FaSistrix /></button>
                </div>
            </form>
        </header>
    );
};

export default Header;