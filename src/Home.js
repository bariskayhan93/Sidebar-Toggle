import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
import clickHandler from "./App.js";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(null);

  return (
    <main>
      <button className="sidebar-toggle" onClick={() => clickHandler()}>
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
