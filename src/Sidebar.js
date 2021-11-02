import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
 const {isSidebarOpen, closeSidebar}=useGlobalContext()

  return (
    <nav>
      <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <h2>Personal Page</h2>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="social-items">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
