import axios from "@/lib/axios";
import { IMentor } from "@/types/mentors";
import { stringify } from "qs-esm";

export function getMentors(id: string): Promise<IMentor>;

export function getMentors(): Promise<IMentor[]>;

export async function getMentors(id?: string): Promise<IMentor | IMentor[]> {
  const { data } = await axios.get(`/mentors/${id || ""}`);

  return data.docs || data;
}

export async function getMentorBySlug(slug?: string): Promise<IMentor[]> {
  const stringifiedQuery = stringify(
    {
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    },
    { addQueryPrefix: true },
  );
  const { data } = await axios.get(`/mentors/${stringifiedQuery}`);

  return data.docs || data;
}
