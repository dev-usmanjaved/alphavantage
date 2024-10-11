import React from "react";
import StockTable from "../lib/components/ui/StockTable";
import Pagination from "../lib/components/ui/Pagination";
import Loader from "../lib/components/ui/Loader";
import Error from "../lib/components/ui/Error";
import useStockData from "../hooks/useStockData";

const StockComponent: React.FC = () => {
  const { stockData, loading, error, currentPage, totalPages, paginate } =
    useStockData();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
        Stock Dashboard
      </h1>
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-600">
        Stock Data for IBM
      </h2>

      {loading && <Loader />}

      {error && <Error message={error} />}

      {stockData && (
        <>
          <StockTable data={stockData} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </>
      )}
    </div>
  );
};

export default StockComponent;
