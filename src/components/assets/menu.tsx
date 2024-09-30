import { BiSolidDashboard } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";

export const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    label: "Trips",
    icon: <FaCar />,
    children: [
      {
        label: "trips",
        path: "/dashboard/trips",
        icon: "trips",
      },
      {
        label: "vehicles",
        path: "/dashboard/trips/vehicles",
        icon: "vehicles",
      },
    ],
  },
  {
    label: "Visitors",
    icon: <FaPerson />,
    children: [
      {
        label: "visits",
        path: "/dashboard/visitors",
        icon: "trips",
      },
      {
        label: "appointments",
        path: "/dashboard/visitors/appointments",
        icon: "vehicles",
      },
    ],
  },
  {
    label: "Reports",
    path: "/dashboard/reports",
    icon: <BiSolidReport />,
  },
];
