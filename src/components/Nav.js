import React from 'react'

const Nav = () => {

    return (
        <div className="nav-container">
            <img src="https://savetheanimalsweb28.netlify.com/images/logo.png" alt="save the animals" className="nav-image" />
            <div className="menu-items">
                <ul>
                    <li>Home</li>
                    <li><a href="https://fervent-aryabhata-ddb2ae.netlify.com/">Login</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;