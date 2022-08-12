import React from "react";
import "./sidebar.scss";
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();

  return <div className="sidebar">
    <div className="top"><span className="logo">Send.</span></div>
    <hr />
    <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><CreateIcon className="icon"/><span>Create Email</span></li>
          <li onClick={() => {
            navigate("/addpeople");
          }}><AddIcon className="icon"/><span>Add People</span></li>
        </ul>
    </div>
  </div>;
};

export default Sidebar;
