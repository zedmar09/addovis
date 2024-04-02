import axiosClient from 'src/http-request/axios-request';

export const adminSearch = async (url, keyword, setSearch, setSearchResults) => {
  setSearch(keyword);

  try {
    const res = await axiosClient.get(`${url}?value=${keyword}`);
    const data = res.data;

     setSearchResults(data?.results);
  } catch (error) {
    console.error("Error fetching information:", error);
  }
};