import { useState, useEffect } from "react";
import { fetchStockData } from "../lib/api";
import { StockData } from "../types";
import { DEFAULT_STOCK_SYMBOL, DATA_PER_PAGE } from "../constants";

const useStockData = () => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchStockData(DEFAULT_STOCK_SYMBOL);
        setStockData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastData = currentPage * DATA_PER_PAGE;
  const indexOfFirstData = indexOfLastData - DATA_PER_PAGE;
  const currentStockData = stockData
    ? Object.entries(stockData).slice(indexOfFirstData, indexOfLastData)
    : [];

  const totalPages = stockData
    ? Math.ceil(Object.keys(stockData).length / DATA_PER_PAGE)
    : 0;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    stockData: currentStockData,
    loading,
    error,
    currentPage,
    totalPages,
    paginate,
  };
};

export default useStockData;
