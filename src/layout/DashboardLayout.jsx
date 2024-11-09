import React from "react";
import SidesBar from "../component/dashboard/SidesBar";
import {Outlet} from "react-router-dom";
import Header from "../component/dashboard/Header";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[240px_1fr] grid-rows-[auto_1fr] h-screen "> 
      <aside>
        <SidesBar/>
      </aside>
      <div className="flex flex-col max-w-full ">
      <header>
        <Header/>
      </header>
      <main className="mt-10 mx-10">
    <Outlet/>
    </main>
    </div>
    </div>
  );
};

export default DashboardLayout;
