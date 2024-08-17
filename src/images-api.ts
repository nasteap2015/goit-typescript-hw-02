import axios from "axios";

interface ParamProps {
  query: string,
  client_id: string,
  page: number,
  per_page: number,
  orientation: string,
}

interface ApiResponse {
  total: number,
  total_pages: number,
  results: [],
}

export const fetchImagesByQuery = async (query: string, page: number): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`https://api.unsplash.com/search/photos`, {
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
