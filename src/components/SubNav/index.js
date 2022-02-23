import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SubNav = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="navar-dropdown">
        <Link to="/paichopickle">{title}</Link>
        <MdKeyboardArrowRight
          className="dropdown-item-icon"
          onClick={() => setOpen(!open)}
        />
      </li>
      {open &&
      
        items.map((data, index) => {
          return (
            <ul className="subdropdown">
            <li className="navar-dropdown-li" key={index}>
              <Link to="/paichopickle">{data.title}</Link>
            </li>
            </ul>
          );
        })
        }
    </>
  );
};

export default SubNav;