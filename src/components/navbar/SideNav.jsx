import React from "react";
import logo from "../assets/logo.png";
import "./nav.css";
import { BiUserPin, BiHelpCircle } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { IoDocumentOutline, IoLogInOutline } from "react-icons/io5";
import { HiOutlineInbox, HiOutlineBookOpen } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import {
  AiOutlineFolderOpen,
  AiOutlineUnorderedList,
  AiOutlineDashboard,
} from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const SideNav = () => {
  return (
    <>
      <div className="navbar">
        <div className="title-container">
          <img src={logo} alt="logo" />
          <p className="name">Artemis</p>
        </div>
        <div className="main side-links">
          <p className="heading">Main</p>
          <div className="links">
            <MainIcons
              icon={<AiOutlineDashboard className="icon" />}
              title="Dashboard"
            />
            <MainIcons
              icon={<TfiWorld className="icon" />}
              title="Discover"
              msg="4"
            />
            <MainIcons icon={<BiUserPin className="icon" />} title="Users" />
            <MainIcons
              icon={<HiOutlineBookOpen className="icon" />}
              title="Documents"
            />
            <MainIcons
              icon={<RxDashboard className="icon" />}
              title="Applications"
            />
            <MainIcons
              icon={<IoDocumentOutline className="icon" />}
              title="Pages"
            />
          </div>
        </div>
        <div className="Secondary side-links">
          <p className="heading">Secondry</p>
          <div className="links">
            <SecondaryIcons
              icon={<BiHelpCircle className="icon" />}
              title="Support Center"
            />

            <SecondaryIcons
              icon={<HiOutlineInbox className="icon" />}
              title="Inbox"
            />
            <SecondaryIcons
              icon={<AiOutlineFolderOpen className="icon" />}
              title="File Manager"
            />
            <SecondaryIcons
              icon={<AiOutlineUnorderedList className="icon" />}
              title="Data List"
            />
            <SecondaryIcons
              icon={<CiSettings className="icon" />}
              title="Setting"
              style={{ marginTop: "25px" }}
            />
            <SecondaryIcons
              icon={<IoLogInOutline className="icon" />}
              title="Logout"
            />

            {/* #382bdb */}
            {/* #808fa1 */}
            {/* #f1f4f9 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

const MainIcons = ({ icon, title, msg }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="link" onClick={() => setOpen(!open)}>
      {icon}
      <span>{title}</span>
      {msg ? (
        <span className="msg">
          <p>4</p>
        </span>
      ) : (
        <>
          {open ? (
            <BsChevronUp className="icon drop" />
          ) : (
            <BsChevronDown className="icon drop" />
          )}
        </>
      )}
    </div>
  );
};
const SecondaryIcons = ({ icon, title, style }) => {
  return (
    <div className="link" style={style}>
      {icon}
      <span>{title}</span>
    </div>
  );
};
