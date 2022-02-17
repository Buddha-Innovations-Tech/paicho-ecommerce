import React from "react";
import { NavLink } from "react-router-dom";

const AccountSideNav = () => {
  return (
    <>
      <div className="accountsidenav">
        <div className="accountsidenav__wrapper">
          <ul>
            <li>
              <NavLink to="/account" className="active-link">My Account Details</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" className="active-link">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/orderhistory" className="active-link">My Order History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountSideNav;
