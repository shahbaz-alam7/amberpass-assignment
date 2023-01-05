import React from "react";
import user from "../assets/user.png";
import { CiSearch, CiSettings, CiBellOn } from "react-icons/ci";
import { BiMessageAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
const TopNavbar = () => {
  return (
    <div className="top-nav">
      <div className="search">
        <CiSearch className="icon" />
        <input type="text" name="" id="" placeholder="Type to search..." />
      </div>
      <div className="user-acc">
        <div className="icon-div">
          <CiSettings className="icon"/>
          <BiMessageAlt className="icon"/>
          <CiBellOn className="icon"/>
        </div>
        <div className="user-detail">
          <div className="name">
            <h4>Thomas Brown</h4>
            <p>Developer</p>
          </div>
          <img src={user} alt="" />
          <BsChevronDown />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
