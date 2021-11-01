import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
//import { useGlobalContext } from "./context";
const Sidebar = () => {
  const [showItem, setShowItem] = useState(0);
  const linksRef = useRef(null);
  const containerRef = useRef(null);

  const clickHandler = () => {setShowItem(!showItem)};

  useEffect(() => {
    const itemWidth = linksRef.current.getBoundingClientRect().width;
    if (showItem) {
      containerRef.current.style.width = `${itemWidth}px`;
    } else {
      containerRef.current.style.width = "0px";
    }
  }, [showItem]);

  return (
    <nav>
      <div className={`${showItem ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <h2>Personal Page</h2>
          <button className="close-btn" onClick={() => clickHandler()}>
            <FaTimes />
          </button>
        </div>
        <div className="links-container" ref={containerRef}>
          <ul className="links" ref={linksRef}>
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
          <ul className="social-items" ref={social}>
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
