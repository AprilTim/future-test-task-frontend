import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner_inner">
                    <h1 className="banner_title">Summer<br/>Collection</h1>
                    <div className="banner_subtitle"><span>25%</span> OFF</div>
                    <a href='#' className="btn">Details
                        <FontAwesomeIcon className='btn_arrow' icon={faLongArrowAltRight}/></a>
                </div>
            </div>
        </div>
    )
}

export default Banner;