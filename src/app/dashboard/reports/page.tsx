"use client";

import Link from "next/link";

const Reports = () => {
  return (
    <>
      <section className="bg-primary text-sm rounded-tl rounded-tr text-white flex items-center justify-between px-4 py-3">
        <div>
          <h1>Report Name</h1>
        </div>
        <div>
          <h1>Primary Module</h1>
        </div>
        <div>
          <h1>Owner</h1>
        </div>
      </section>
      <section className="bg-white shadow px-4 py-3 text-xs rounded-bl rounded-br flex items-center justify-between">
        <div className="space-y-4">
          <Link className="block" href={'/dashboard/reports/visitors/all-visitors'}>All visitors</Link>
          <Link className="block" href={'/dashboard/reports/visitors/visitors-left'}>All visitors who have left the site</Link>
          <Link className="block" href={'/dashboard/reports/appointments/all-appointments'}>All Appointments</Link>
          <Link className="block" href={'/dashboard/reports/appointments/complete-appointments'}>Complete Appointments</Link>
          <Link className="block" href={'/dashboard/reports/appointments/upcoming-appointments'}>Upcoming Appointments</Link>
          <Link className="block" href={'/dashboard/reports/trips/all-trips'}>All Trips</Link>
          <Link className="block" href={'/dashboard/reports/trips/ongoing-trips'}>Ongoing Trips</Link>
          <Link className="block" href={'/dashboard/reports/trips/complete-trips'}>Complete Trips</Link>
        </div>
        <div className="space-y-4">
          <p>Visitor Management</p>
          <p>Visitor Management</p>
          <p>Visitor Management</p>
          <p>Visitor Management</p>
          <p>Visitor Management</p>
          <p>Trips Management</p>
          <p>Trips Management</p>
          <p>Trips Management</p>
        </div>
        <div className="space-y-4">
          <p>Think Synergy Admin</p>
          <p>Think Synergy Admin</p>
          <p>Think Synergy Admin</p>
          <p>Think Synergy Admin</p>
          <p>Think Synergy Admin</p>
          <p>Think Synergy Admin</p>
          <p>Think Synergy Admin</p>
          <p>Think Synergy Admin</p>
        </div>
      </section>

    </>
  );
};

export default Reports;
