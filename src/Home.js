import React, { useContext, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <CgMenuGridO />
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  );
};

export default Home;
