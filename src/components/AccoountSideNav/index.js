import { NavLink } from "react-router-dom";
import React from "react";

const AccountSideNav = () => {
  return (
    <>
      <div className="accountsidenav" style={{ width: "200px" }}>
        <div className="accountsidenav__wrapper">
          <ul>
            <li>
              <NavLink to="/account" className="active-link">
                My Account Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" className="active-link">
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/orderhistory" className="active-link">
                My Order History
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountSideNav;
