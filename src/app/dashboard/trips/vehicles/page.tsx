"use client";
import React from "react";
import {
  Column,
  Paging,
  Pager,
  HeaderFilter,
} from "devextreme-react/data-grid";
import dynamic from "next/dynamic";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const Vehicles = () => {
  return (
    <div>
      <DataGrid
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        remoteOperations={true}
        showColumnLines={true}
        showRowLines={true}
        wordWrapEnabled={true}
        className="shadow-xl w-full"
        // height={"70vh"}
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
          dataField="organisation"
          caption="Organisation"
          allowFiltering={false}
          width={180}
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
              Vehicle Type
            </div>
          )}
        />
        <Column
          dataField="nightcheckdonewithverification"
          caption="Night Check Done"
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
          dataField="nightcheckdonewithoutverification"
          caption="Night Check Done"
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
              Vehicle Id
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
              Driver Name
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
              Created Time
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
              Registration Number
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
              Vehicle Owner Farm
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
              Modified Time
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
              Modified Time
            </div>
          )}
        />
      </DataGrid>
    </div>
  );
};

export default Vehicles;
