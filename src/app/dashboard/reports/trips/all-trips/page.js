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
import { fetchTrips } from "../../../../redux/service/trips";
import { setTrips } from "@/app/redux/features/trips";
// import Tabs from "../trips-tab";
// import OpenTrips from "./open-trips";
// import ClosedTrips from "./closed-trips";
// import SearchVehicle from "./search-vehicle";
import Loading from "@/components/assets/hoc/Loading";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const AllTrips = () => {
  const { trips } = useSelector((store) => store.trip);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  const type = "trips";

  const getAllTrips = async () => {
    const res = await fetchTrips(type);
    dispatch(setTrips(res));
    setLoading(false)
  };

  useEffect(() => {
    if (trips.length === 0) {
      getAllTrips();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <div className="flex justify-end mb-1">
            <SearchVehicle />
          </div> */}
          {/* <Tabs {...{ currentTab, setCurrentTab }} /> */}
          {currentTab === 0 && (
            <DataGrid
              dataSource={trips}
              // allowColumnReordering={true}
              // rowAlternationEnabled={true}
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
                dataField="exitdatetime"
                caption="Organisation"
                allowFiltering={false}
                width={180}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.exitdatetime}`}
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
                    Created Time
                  </div>
                )}
              />
              <Column
                dataField="drivername"
                caption="Driver Name"
                width={180}
                alignment="left"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.drivername}`}
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
                    Driver Name
                  </div>
                )}
              />
              <Column
                dataField="turnboy"
                caption="Night Check Done"
                width={180}
                alignment="left"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div
                    style={{ fontSize: "12px" }}
                  >{`${rowData.data.turnboy}`}</div>
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
                    Turnboy Name
                  </div>
                )}
              />
              <Column
                dataField="regno"
                caption="Night Check Missed"
                width={180}
                alignment="left"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div
                    style={{ fontSize: "12px" }}
                  >{`${rowData.data.regno}`}</div>
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
                    Reg. Number
                  </div>
                )}
              />
              <Column
                dataField="exitmileage"
                caption="Night Check Missed"
                width={180}
                alignment="left"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.exitmileage}`}
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
                    Exit Mileage
                  </div>
                )}
              />
              <Column
                dataField="destination"
                caption="Night Check Missed"
                width={180}
                alignment="left"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.destination}`}
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
                    Destination
                  </div>
                )}
              />
              <Column
                dataField="sealnumber"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.sealnumber}`}
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
                    Seal Number
                  </div>
                )}
              />
              <Column
                dataField="noofboxes"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.noofboxes}`}
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
                    Number of Boxes
                  </div>
                )}
              />
              <Column
                dataField="entrymileage"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.entrymileage}`}
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
                    Entry Mileage
                  </div>
                )}
              />
              <Column
                dataField="nightcheckmissed"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                // cellRender={(rowData) => (
                //   <div style={{ fontSize: "12px" }}>
                //     {`${rowData.data.entrymileage}`}
                //   </div>
                // )}
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
                    Total Distance
                  </div>
                )}
              />
              <Column
                dataField="nightcheckmissed"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
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
                    Assigned To
                  </div>
                )}
              />
              <Column
                dataField="exitnotes"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.exitnotes}`}
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
                    Exit Notes
                  </div>
                )}
              />
              <Column
                dataField="entrydate"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.entrydate}`}
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
                    Entry Date
                  </div>
                )}
              />
              <Column
                dataField="entrytime"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.entrytime}`}
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
                    Entry Time
                  </div>
                )}
              />
              <Column
                dataField="entrynotes"
                caption="Night Check Missed"
                width={180}
                alignment="right"
                allowFiltering={false}
                cellRender={(rowData) => (
                  <div style={{ fontSize: "12px" }}>
                    {`${rowData.data.entrynotes}`}
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
                    Entry Notes
                  </div>
                )}
              />
            </DataGrid>
          )}

          {/* {currentTab === 1 && <OpenTrips />}
          {currentTab === 2 && <ClosedTrips />} */}
        </>
      )}
    </div>
  );
};

export default AllTrips;
