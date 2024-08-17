import axios from "axios";

export const fetchImagesByQuery = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: query,
      client_id: "ghdoKY7TcbZTj1eBhOcH2xxXvry68YO2AmEtPsMb5DQ",
      page: page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return response.data;
};
