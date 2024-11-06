import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import TocIcon from "@mui/icons-material/Toc";

export const sideBarData = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <HomeIcon />,
    title: "Home",
    link: "/",
  },
  {
    icon: <TableRowsIcon />,
    title: "Table",
    link: "/table",
  },
  {
    icon: <ViewAgendaIcon />,
    title: "Card",
    link: "/card",
  },
  {
    icon: <TocIcon />,
    title: "Form",
    link: "/form",
  },
];

const SidesBar = () => {
    const navigate = useNavigate();
  return (
    //  <div className="max-h-screen">
    <div className=" h-[20vh] w-60">
      {sideBarData.map((side, index) => (
        <div key={index} className="bg-slate-700 text-white ">
          <ul>
            <li className="flex gap-4 p-8" onClick={() => navigate(side.link)}>
             
              {side.icon}
              <h3>{side.title}</h3>
            </li>
          </ul>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default SidesBar;
