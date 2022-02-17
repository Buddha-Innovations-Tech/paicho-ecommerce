import React from "react";
import { Link } from "react-router-dom";

const AccountSideNav = () => {
  return (
    <>
      <div className="accountsidenav">
        <div className="accountsidenav__wrapper">
          <ul>
            <li>
              <Link to="/account">My Account Details</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/orderhistory">My Order History</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountSideNav;
