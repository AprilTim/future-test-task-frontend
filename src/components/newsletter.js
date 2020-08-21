import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="container">
                <h2 className="newsletter_title">Newsletter</h2>
                <div className="newsletter_item">
                    <input placeholder="Enter your email address.." className="newsletter_input"></input>
                    <div><a className="btn __gardient">send</a></div>
                </div>
            </div>
        </div>
    )
}



export default Newsletter;