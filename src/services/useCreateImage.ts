import axios from "axios";

const API_URL = "http://localhost:3000/api";

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
