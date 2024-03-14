import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateToken = () => {
  return Math.floor(Math.random() * 100000000000 * 30000000)
    .toString()
    .substring(64);
};
