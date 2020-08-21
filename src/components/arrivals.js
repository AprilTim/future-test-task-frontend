import React from 'react';
import like from "../img/arrivals/like.png";
import comment from "../img/arrivals/comment.png";
import item_1 from "../img/arrivals/item_1.png";
import item_2 from "../img/arrivals/item_2.png";
import item_3 from "../img/arrivals/item_3.png";
import item_4 from "../img/arrivals/item_4.png";
import item_5 from "../img/arrivals/item_5.png";
import item_6 from "../img/arrivals/item_6.png";

const Arrivals = () => {
    return (
        <div className="arrivals">
            <div className="arrivals_inner">
                <div className="arrivals_body">
                    <div className="container">
                        <h2 className="arrivals_title">Trendy Arrivals</h2>
                        <div className="tabs">
                            <div className="shop_item">
                                <div className="item_block">
                                    <div className="social">
                                        <div className="social_item"><img src={like}/>253</div>
                                        <div className="social_item"><img src={comment}/>120</div>
                                    </div>
                                    <img src={item_1}/>
                                    <div className="item_description">
                                        <div className="item_name">
                                            Black Genuine Leather Bags
                                        </div>
                                        <div className="item_price">
                                            $ 23.20
                                        </div>
                                    </div>
                                    <div className="addCart">
                                        <a className='btn __gardient'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_item">
                                <div className="item_block">
                                    <div className="social">
                                        <div className="social_item"><img src={like}/>253</div>
                                        <div className="social_item"><img src={comment}/>120</div>
                                    </div>
                                    <img src={item_2}/>
                                    <div className="item_description">
                                        <div className="item_name">
                                            Black Genuine Leather Bags
                                        </div>
                                        <div className="item_price">
                                            $ 23.20
                                        </div>
                                    </div>
                                    <div className="addCart">
                                        <a className='btn __gardient'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_item">
                                <div className="item_block">
                                    <div className="social">
                                        <div className="social_item"><img src={like}/>253</div>
                                        <div className="social_item"><img src={comment}/>120</div>
                                    </div>
                                    <img src={item_3}/>
                                    <div className="item_description">
                                        <div className="item_name">
                                            Black Genuine Leather Bags
                                        </div>
                                        <div className="item_price">
                                            $ 23.20
                                        </div>
                                    </div>
                                    <div className="addCart">
                                        <a className='btn __gardient'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_item">
                                <div className="item_block">
                                    <div className="social">
                                        <div className="social_item"><img src={like}/>253</div>
                                        <div className="social_item"><img src={comment}/>120</div>
                                    </div>
                                    <img src={item_4}/>
                                    <div className="item_description">
                                        <div className="item_name">
                                            Black Genuine Leather Bags
                                        </div>
                                        <div className="item_price">
                                            $ 23.20
                                        </div>
                                    </div>
                                    <div className="addCart">
                                        <a className='btn __gardient'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_item">
                                <div className="item_block">
                                    <div className="social">
                                        <div className="social_item"><img src={like}/>253</div>
                                        <div className="social_item"><img src={comment}/>120</div>
                                    </div>
                                    <img src={item_5}/>
                                    <div className="item_description">
                                        <div className="item_name">
                                            Black Genuine Leather Bags
                                        </div>
                                        <div className="item_price">
                                            $ 23.20
                                        </div>
                                    </div>
                                    <div className="addCart">
                                        <a className='btn __gardient'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="shop_item">
                                <div className="item_block">
                                    <div className="social">
                                        <div className="social_item"><img src={like}/>253</div>
                                        <div className="social_item"><img src={comment}/>120</div>
                                    </div>
                                    <img src={item_6}/>
                                    <div className="item_description">
                                        <div className="item_name">
                                            Black Genuine Leather Bags
                                        </div>
                                        <div className="item_price">
                                            $ 23.20
                                        </div>
                                    </div>
                                    <div className="addCart">
                                        <a className='btn __gardient'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Arrivals;