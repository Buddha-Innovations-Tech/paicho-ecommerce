import React from 'react'
import { Link } from 'react-router-dom'

const AccountSideNav = () => {
  return (
    <>
        <div className="accountsidenav">
            <div className="accountsidenav__wrapper">
                <ul>
                    <li><Link to="">My Account Details</Link></li>
                    <li><Link to="">Wishlist</Link></li>
                    <li><Link to="">My Order History</Link></li>
                </ul>

                
                
            </div>
        </div>
    </>
  )
}

export default AccountSideNav