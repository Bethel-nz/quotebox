import axios from "axios";

export const fetcher = async (url: string) => {
  const res = await axios.get(url);
  if (!res) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  return res.data as typeof res.data;
};
