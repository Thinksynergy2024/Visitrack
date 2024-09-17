import VisitorsLocationGraph from "@/components/dashboard/visitors-location-graph";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-primary text-sm font-bold mb-2">Key Metrics</h1>
      <div className="space-y-4 overflow-y-auto">
        <section className="md:flex items-center justify-between">
          <div className="md:w-1/2 text-white my-auto space-y-2">
            <VisitorsLocationGraph />
          </div>
          <div className="w-1/2 text-sm p-4 rounded">
            <VisitorsLocationGraph />
          </div>
        </section>
        <section className="md:flex items-center justify-between">
          <div className="md:w-1/2 text-white my-auto space-y-2">
            <VisitorsLocationGraph />
          </div>
          <div className="w-1/2 text-sm p-4 rounded">
            <VisitorsLocationGraph />
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
