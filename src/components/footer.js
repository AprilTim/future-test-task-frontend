import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer_title">Big Shop</h2>
                <div className="footer_category">
                    <div className="footer_item">Man</div>
                    <div className="footer_item">Woman</div>
                    <div className="footer_item">Kids</div>
                    <div className="footer_item">Bags</div>
                    <div className="footer_item">Watches</div>
                    <div className="footer_item">Toys</div>
                </div>
                <div className="social_network">
                    <div className="footer_icon"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></div>
                    <div className="footer_icon"><i className="fa fa-google-plus fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="footer_icon"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></div>
                    <div className="footer_icon"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></div>
                </div>
            </div>
        </footer>
    )
}



export default Footer;