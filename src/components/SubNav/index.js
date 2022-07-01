import React, { useState,useEffect,useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SubNav = ({ title, categories }) => {
  const [open, setOpen] = useState(false);
  const myRef = useRef();

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
        setOpen(true);
    }
};

const handleClickInside = () => setOpen(false);

useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
});
    
  return (
    <>
      <li className="navar-dropdown small-navitem">
        <Link to={`/${title}`}>{title}</Link>
        <MdKeyboardArrowRight
          className="dropdown-item-icon"
          onClick={() => setOpen(!open)}
        />
      </li>
      {open &&
        categories&& categories.subcategories?.map((data, index) => {
          
          return (
            <>
            <ul className="subdropdown" key={index}>
              <li className="navar-dropdown-li" ref={myRef} onClick={handleClickInside}>
                <Link to={`/${title}`} state={data.name} key={index}>{data?.name}</Link>
              </li>
            </ul>
            </>
          );
        })
        }
    </>
  );
};

export default SubNav;
