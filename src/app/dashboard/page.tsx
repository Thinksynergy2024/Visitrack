import VisitorsLocationGraph from "@/components/dashboard/visitors-location-graph";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-primary text-sm font-bold mb-2">Key Metrics</h1>
      <div className="space-y-4 overflow-y-auto">
        <section className="md:flex items-center justify-between gap-4 md:space-y-0 space-y-2">
          <div className="md:w-1/2 my-auto ">
            <VisitorsLocationGraph />
          </div>
          <div className="md:w-1/2 my-auto">
            <VisitorsLocationGraph />
          </div>
        </section>
        <section className="md:flex items-center justify-between gap-4 md:space-y-0 space-y-2">
          <div className="md:w-1/2 my-auto">
            <VisitorsLocationGraph />
          </div>
          <div className="md:w-1/2 my-auto">
            <VisitorsLocationGraph />
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
