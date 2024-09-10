import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTimeAgo = (date: string) => {
  const givenDate = new Date(date);
  const now = new Date();

  const differenceInMilliseconds = now.getTime() - givenDate.getTime();

  const minutes = Math.floor(differenceInMilliseconds / 60000);
  const hours = Math.floor(differenceInMilliseconds / 3600000);
  const days = Math.floor(differenceInMilliseconds / 86400000);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return "Just now";
  }
};
