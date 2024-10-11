import React from "react";
import { StockData } from "../../../types";
import {
  tableHeaderClass,
  tableCellClass,
  tableRowClass,
  tableContainerClass,
} from "./ClassNames";

interface StockTableProps {
  data: [string, StockData[string]][];
}

const headerHash: Record<keyof StockData[string], string> = {
  "1. open": "Open",
  "2. high": "High",
  "3. low": "Low",
  "4. close": "Close",
};

const StockTable: React.FC<StockTableProps> = ({ data }) => {
  return (
    <div className={tableContainerClass}>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className={tableHeaderClass}>Date</th>{" "}
            {Object.keys(headerHash).map((key) => (
              <th key={key} className={tableHeaderClass}>
                {headerHash[key as keyof typeof headerHash]}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map(([date, values], index) => (
            <tr
              key={date}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } ${tableRowClass}`}
            >
              <td className={tableCellClass}>{date}</td>
              {Object.keys(headerHash).map((key) => (
                <td key={key} className={tableCellClass}>
                  {values[key as keyof StockData[string]] || "N/A"}{" "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
