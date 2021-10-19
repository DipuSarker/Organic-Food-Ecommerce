import React from 'react'

function Nav() {
    return (
        <div>
            <div className="logo">
                <a href="/">ECOMMERCE</a>
            </div>
            
            <div className="side-box">
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search Food" />
                </div>
            </div>
        </div>
    )
}

export default Nav
