import axios from "axios";
import { API_KEY, BASE_URL, TIME_SERIES_DAILY } from "../constants";

export const fetchStockData = async (symbol: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        function: TIME_SERIES_DAILY,
        symbol: symbol,
        apikey: API_KEY,
      },
    });
    if (response.data["Information"]) {
      throw new Error(response.data["Information"]);
    }
    return response.data["Time Series (Daily)"];
  } catch (error) {
    throw error;
  }
};
