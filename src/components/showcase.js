import React from 'react';
import Fashion from "./tabs/fashion";
import Furnitures from "./tabs/Furnitures";
import Watches from "./tabs/watches";
import Mobile from "./tabs/mobile";
import Cloth from "./tabs/cloth";
import Toys from "./tabs/toys";

const Showcase = (props) => {
let tabs;

let check = () => {
    switch (props.category) {
        case "Fashion":
            return  tabs = <Fashion/>
        case "Furnitures":
            return  tabs = <Furnitures/>
        case "Watches":
            return  tabs = <Watches/>
        case "Mobile":
            return  tabs = <Mobile/>
        case "Cloth":
            return tabs = <Cloth/>
        case "Toys":
            return  tabs = <Toys/>
        default:
            return  tabs = <Mobile/>
    }}


    return (

        <div className="showcase">
            <div className="showcase_inner">
                <div className="showcase_body">
                    <div className="container">
                        <h2 className="showcase_title">Our Showcase</h2>
                        <div className="showcase_category">
                            <button onClick={props.changeCategory} id="Fashion"
                                    className={`category_item ${props.category == "Fashion"?"__active"
                                        :''}`}>Fashion</button>
                            <button onClick={props.changeCategory} id="Furnitures"
                                    className={`category_item ${props.category == "Furnitures"?"__active"
                                        :''}`}>Furnitures</button>
                            <button onClick={props.changeCategory} id="Watches"
                                    className={`category_item ${props.category == "Watches"?"__active"
                                        :''}`}>Watches</button>
                            <button onClick={props.changeCategory} id="Mobile"
                                    className={`category_item ${props.category == "Mobile"?"__active"
                                        :''}`}>Mobile</button>
                            <button onClick={props.changeCategory} id="Cloth"
                                    className={`category_item ${props.category == "Cloth"?"__active"
                                        :''}`}>Cloth</button>
                            <button onClick={props.changeCategory} id="Toys"
                                    className={`category_item ${props.category == "Toys"?"__active"
                                        :''}`}>Toys</button>
                        </div>
                        {check()}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Showcase;