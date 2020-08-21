import React from 'react';
import circle from "../img/brand/circle.png";
import iphone from "../img/brand/iphone.png";

const Brands = () => {
    return (
        <div className="brands">
            <div className="container">
                <div className='brands_inner'>
                    <div className="brands_description">
                        <h2 className="brands_title">Our Brands</h2>
                        <div className="brands_subtitle">Small Shoes 2017 new Arrivals mini<br/>
                            Messenger <span className="__violet">Classic Shoes</span>
                        </div>
                        <div className="brands_text">In porttitor elit ac mi placerat hendrerit. Morbi accumsan,
                            erat in
                            ullamcorper consectetur, nisi erat efficitur eros, sagittis tristique odio turpis vitae
                            dui.
                            Vestibulum gravida est ut erat pretium, non pretium diam feugiat. Integer egestas
                            suscipit
                            lorem ac fermentum. Integer at mauris vitae justo sagittis dapibus. Pellentesque sit
                            amet
                            nisl vitae orci vehicula faucibus. Fusce et lat, feugiat est.
                        </div>
                    </div>
                    <div className="brands_item">
                        <div className="brands_photo">
                            <img className="brands_circle" src={circle}/>
                            <img className="brands_iphone" src={iphone}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Brands;