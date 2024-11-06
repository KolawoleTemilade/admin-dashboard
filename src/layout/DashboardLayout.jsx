import React from "react";
import SidesBar from "../component/dashboard/SidesBar";
import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex"> 
      <div>
        <SidesBar />
      </div>
      <div>
    <Outlet/>
    </div>
    </div>
  );
};

export default DashboardLayout;
