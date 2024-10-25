"use client";
import React,{useContext} from "react";
import { usePathname } from "next/navigation";
import { authContext } from "@/use-context";
import { useAuth } from '../assets/hooks/use-auth'
import { BsChevronDown } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const CustomizedHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logoutUser, user } = useContext(authContext);
  const token = useAuth();

  const currentPath = usePathname();

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="bg-white shadow h-[10vh] py-6 px-4 flex items-center justify-between">
      <div>
        {currentPath === "/dashboard" ? (
          <h1 className="font-bold">Dashboard</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/trips/vehicles" ? (
          <h1 className="font-bold">Vehicles</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/trips" ? (
          <h1 className="font-bold">Trips</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/visitors" ? (
          <h1 className="font-bold">Visitors</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/visitors/appointments" ? (
          <h1 className="font-bold">Appointments</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports" ? (
          <h1 className="font-bold">Reports</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/visitors/all-visitors" ? (
          <h1 className="font-bold">All Visitors</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/visitors/visitors-left" ? (
          <h1 className="font-bold">Visitors who have left</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/appointments/all-appointments" ? (
          <h1 className="font-bold">All Appointments</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/appointments/complete-appointments" ? (
          <h1 className="font-bold">Complete Appointments</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/appointments/upcoming-appointments" ? (
          <h1 className="font-bold">Upcoming Appointments</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/trips/all-trips" ? (
          <h1 className="font-bold">All Trips</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/trips/complete-trips" ? (
          <h1 className="font-bold">Complete Trips</h1>
        ) : (
          ""
        )}
        {currentPath === "/dashboard/reports/trips/ongoing-trips" ? (
          <h1 className="font-bold">Ongoing Trips</h1>
        ) : (
          ""
        )}
      </div>
      <div>
      <div className="flex items-center gap-2">
          <span className=" text-sm">{user?.username}</span>
          <BsChevronDown onClick={handleClick} className=" cursor-pointer" />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Link href="/dashboard/profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={logoutUser}>Logout</MenuItem>
        </Menu>
      </div>
    </section>
  );
};

export default CustomizedHeader;
