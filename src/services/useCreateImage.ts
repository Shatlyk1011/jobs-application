import axios from "axios";
import { API_URL } from "./shared/constant";

export function useCreateImage() {
  const createImage = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const req = await axios("/media", {
        baseURL: API_URL,
        method: "POST",
        data: formData,
      });

      return req.data.doc.url;
    } catch (err) {
      return "";
    }
  };

  return { createImage };
}

export default useCreateImage;
