"use client";
import React from "react";
import MenuChildren from "../assets/menu-children";

const Sidebar = () => {
  return (
    <section className="bg-primary shadow-2xl h-screen py-4 pl-4">
      <div className="h-[10vh] flex items-center justify-center">
        <h1 className="text-white">Logo</h1>
      </div>
      <div className="space-y-10 text-background my-4 px-4">
        <MenuChildren />
      </div>
    </section>
  );
};

export default Sidebar;
