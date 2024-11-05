import React from "react";
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
    link: "/home",
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
  return (
    <div className="w-60">
      {sideBarData.map((side, index) => (
        <div key={index} className="h-full bg-slate-700 text-white ">
          <ul>
            <li className="flex gap-4 p-8">
              {side.icon}
              <h3>{side.title}</h3>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SidesBar;
