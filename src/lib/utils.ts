import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { FetchOptions } from "@/types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async <T>(
  url: string,
  options: FetchOptions
): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("An error occurred during the query");
  }
  return response.json();
};
