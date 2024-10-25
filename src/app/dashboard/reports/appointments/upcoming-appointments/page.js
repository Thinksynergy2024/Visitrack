"use client";
import React, { useEffect } from "react";
import {
  Column,
  Paging,
  Pager,
  HeaderFilter,
} from "devextreme-react/data-grid";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { setVisitors } from "@/app/redux/features/visitors";
import Loading from "@/components/assets/hoc/Loading";
import { fetchVisits } from "@/app/redux/service/visitors";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const UpcomingAppointments = () => {
  const { visits } = useSelector((store) => store.visitors);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  const sanitizeJson = (jsonString) => {
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
      setLoading(false);
    }
  }, []);

  const upcomingAppointments = Array.isArray(visits) && visits.filter(
    (visit) =>
      visit.status === "Started" &&
      visit.appointment === "1" &&
      visit.visitorstatus === ""
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <DataGrid
          dataSource={upcomingAppointments}
          allowColumnReordering={true}
          rowAlternationEnabled={true}
          showBorders={true}
          remoteOperations={true}
          showColumnLines={true}
          showRowLines={true}
          wordWrapEnabled={true}
          className="shadow-xl w-full"
          height={"84vh"}
        >
          <HeaderFilter visible={true} />
          <Pager
            visible={true}
            // allowedPageSizes={allowedPageSizes}
            showPageSizeSelector={true}
            showNavigationButtons={true}
          />
          <Paging defaultPageSize={50} />
          <Column
            dataField="visitorname"
            caption="Organisation"
            allowFiltering={false}
            width={180}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.visitorname}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Visitor Name
              </div>
            )}
          />
          <Column
            dataField="visitororigin"
            caption="Driver Name"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.visitororigin}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Visitor Origin
              </div>
            )}
          />
          <Column
            dataField="visitoridnumber"
            caption="Night Check Done"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div
                style={{ fontSize: "12px" }}
              >{`${rowData.data.visitoridnumber}`}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Visitor ID
              </div>
            )}
          />
          <Column
            dataField="visitorstatus"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div
                style={{ fontSize: "12px" }}
              >{`${rowData.data.visitorstatus}`}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Visitor Status
              </div>
            )}
          />
          <Column
            dataField="visitorphonenumber"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.visitorphonenumber}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Phone Number
              </div>
            )}
          />
          <Column
            dataField="persontovisit"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.persontovisit}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Person to visit
              </div>
            )}
          />
          <Column
            dataField="visitoritemsdescription"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.visitoritemsdescription}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Item Description
              </div>
            )}
          />
          <Column
            dataField="datecheckedin"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.datecheckedin}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Date Checked In
              </div>
            )}
          />
          <Column
            dataField="timecheckedin"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.timecheckedin}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Time Checked In
              </div>
            )}
          />
          <Column
            dataField="activity"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div
                style={{ fontSize: "12px" }}
              >{`${rowData.data.activity}`}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Activity
              </div>
            )}
          />
          <Column
            dataField="location"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div
                style={{ fontSize: "12px" }}
              >{`${rowData.data.location}`}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Location
              </div>
            )}
          />
          <Column
            dataField="date_start"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.date_start}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Start Date
              </div>
            )}
          />
          <Column
            dataField="time_start"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.time_start}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Start Time
              </div>
            )}
          />
          <Column
            dataField="status"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>{`${rowData.data.status}`}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Status
              </div>
            )}
          />
          <Column
            dataField="appointment_date"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div style={{ fontSize: "12px" }}>
                {`${rowData.data.appointment_date}`}
              </div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Appointment Date
              </div>
            )}
          />
          <Column
            dataField="priority"
            caption="Night Check Missed"
            width={180}
            alignment="left"
            allowFiltering={false}
            cellRender={(rowData) => (
              <div
                style={{ fontSize: "12px" }}
              >{`${rowData.data.priority}`}</div>
            )}
            headerCellRender={() => (
              <div
                style={{
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  height: "14%",
                  lineHeight: "1.2",
                }}
              >
                Priority
              </div>
            )}
          />
        </DataGrid>
      )}
    </div>
  );
};

export default UpcomingAppointments;
