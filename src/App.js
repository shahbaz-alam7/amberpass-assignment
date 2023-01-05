import React from "react";
import "./App.css";
import SideNav from "./components/navbar/SideNav";
import TopNavbar from "./components/navbar/TopNavbar";
import Details from "./components/main/Details";
import Transaction from "./components/main/Transaction";
const App = () => {
  return (
    <div className="app">
      <SideNav />
      <div className="main-body">
        <TopNavbar />
        <div className="home">
          <Details />
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default App;
