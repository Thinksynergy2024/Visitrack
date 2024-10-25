"use client";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingInit from "highcharts/modules/exporting";
import { useSelector } from "react-redux";

// Initialize the exporting module
if (typeof Highcharts === "object") {
  exportingInit(Highcharts);
}

const CompletedAppointmentGraph = ( { visits }) => {


  // Filter visitors with status 'Out'
  const filteredVisitors = visits.filter((visitor) => visitor.visitorstatus === "Out");

  // Prepare data for the graph based on the filtered visitors
  const locations = filteredVisitors.map(visitor => visitor.location);
  const visitorCounts = locations.reduce((acc, loc) => {
    acc[loc] = (acc[loc] || 0) + 1;
    return acc;
  }, {});

  // Extract categories (locations) and data (visitor counts)
  const categories = Object.keys(visitorCounts);
  const seriesData = Object.values(visitorCounts);

  const [options, setOptions] = useState({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Completed Appointments'
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Location'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Visitors'
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Visitors',
        data: seriesData,
        color: 'rgba(126,86,134,.9)',
        pointPadding: 0.2,
        pointPlacement: 0
      }
    ]
  });

  return (
    <>
      <div className="">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default CompletedAppointmentGraph;
