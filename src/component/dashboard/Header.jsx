import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div className="w-full text-white">
      <div className="bg-slate-500 w-full h-20 flex gap-6 items-center justify-end ">
        <div className="flex items-center mx-6 gap-6 ">
          <div className="border border-white rounded-full p-2">
            <NotificationsIcon className="w-80" />
          </div>
          {/* get how to increase theh sizes of these icons. */}
          <div className="flex">
            <AccountCircleIcon  className="w-80" />
            {/* <input type="file" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
