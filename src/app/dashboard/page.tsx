"use client";
import VisitorsLocationGraph from "@/components/dashboard/visitors-location-graph";
import VisitorsLocationGraphIn from "@/components/dashboard/visitors-location-graph-in";
import UpcomingAppointmentGraph from "@/components/dashboard/upcoming-appointment-graph";
import CompletedAppointmentGraph from "@/components/dashboard/completed-appointment-graph";
import React, { useEffect, useState } from "react";
import { setVisitors } from "../redux/features/visitors";
import { fetchVisits } from "../redux/service/visitors";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/assets/hoc/Loading";

const Dashboard = () => {
  const { visits } = useSelector((store: any) => store.visitors);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const sanitizeJson = (jsonString: "") => {
    return jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, ""); // Remove control characters
  };

  const getAllVisitors = async () => {
    try {
      const res = await fetchVisits();
      const sanitizedResponse = sanitizeJson(res);

      // Attempt to parse the sanitized JSON string
      const visitorsData = JSON.parse(sanitizedResponse);
      dispatch(setVisitors(visitorsData));
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch visitors:", error);
      // You can also display a user-friendly error message here
    }
  };

  useEffect(() => {
    if (visits.length === 0) {
      getAllVisitors();
    } else {
      setLoading(false)
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-primary text-sm font-bold mb-2">Key Metrics</h1>
          <div className="space-y-4 overflow-y-auto">
            <section className="md:flex items-center justify-between gap-4">
              <div className="md:w-1/2 my-auto ">
                <VisitorsLocationGraph {...{ visits }} />
              </div>
              <div className="md:w-1/2 my-auto">
                <VisitorsLocationGraphIn {...{ visits }} />
              </div>
            </section>
            <section className="md:flex items-center justify-between gap-4">
              <div className="md:w-1/2 my-auto ">
                <UpcomingAppointmentGraph {...{ visits }} />
              </div>
              <div className="md:w-1/2 my-auto">
                <CompletedAppointmentGraph {...{ visits }} />
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
