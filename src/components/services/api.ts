import axios from "axios";
import { Image } from "../../types";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "FptwxiChC5Bm_nYApjuu2BDwgNSfw5yahjVJ1hijrXE";

export interface FetchImagesResponse {
  success: boolean;
  images: Image[];
  totalPages: number;
}

interface ApiResponse {
  results: Image[];
  total: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  if (!query || query.trim() === "") {
    console.error("Query cannot be empty");
    return {
      success: false,
      images: [],
      totalPages: 0,
    };
  }
  try {
    const response = await axios.get<ApiResponse>("/search/photos", {
      params: {
        query,
        client_id: ACCESS_KEY,
        page,
        per_page: 12,
      },
      headers: {
        Accept: "application/json",
        "Accept-Version": "v1",
      },
    });
    return {
      success: true,
      images: response.data.results.map((image: Image) => ({
        id: image.id,
        urls: image.urls,
        description: image.description,
        likes: image.likes,
      })),
      totalPages: Math.ceil(response.data.total / 12),
    };
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    return {
      success: false,
      images: [],
      totalPages: 0,
    };
  }
};

export default fetchImages;
