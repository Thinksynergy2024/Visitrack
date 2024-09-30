'use client'
import React from "react";
import { usePathname } from "next/navigation";

const CustomizedHeader = () => {
  const currentPath = usePathname();
  return (
    <section className="bg-white shadow h-[10vh] py-6 px-4">
      {currentPath === "/dashboard" ? <h1 className="font-bold">Dashboard</h1> : ""}
      {currentPath === "/dashboard/trips/vehicles" ? <h1 className="font-bold">Vehicles</h1> : ""}
      {currentPath === "/dashboard/trips" ? <h1 className="font-bold">Trips</h1> : ""}
    </section>
  );
};

export default CustomizedHeader;
