import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { DATA, InvoicesData, Incomimg_ROWS, Invoices_ROW } from "./fakeApi";
import { BsUpload } from "react-icons/bs";
const DataTable = () => {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const [rowData, setRowData] = useState(DATA);

  const [columnDefs, setColumnDefs] = useState(Incomimg_ROWS);

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);
  const [current, setCurrent] = useState("incoming");
  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="transaction-top">
          <h3>Recent Transactions</h3>
          <button onClick={onBtExport}>
            <BsUpload style={{ marginRight: "10px" }} />
            Export
          </button>
        </div>
        <div className="grid-wrapper">
          <div
            className="ag-theme-alpine"
            style={{ height: 400, width: "100%" }}
          >
            <div className="slides">
              <p
                className={current === "incoming" ? "current" : ""}
                onClick={() => {
                  setCurrent("incoming");
                  setRowData(DATA);
                  setColumnDefs(Incomimg_ROWS);
                }}
              >
                Incomings
              </p>
              <p
                className={current === "invoices" ? "current" : ""}
                onClick={() => {
                  setCurrent("invoices");
                  setRowData(InvoicesData);
                  setColumnDefs(Invoices_ROW);
                }}
              >
                Invoices
              </p>
            </div>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              defaultColDef={defaultColDef}
              columnDefs={columnDefs}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataTable;
