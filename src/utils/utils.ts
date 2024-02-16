import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const handleDate = (publishTime: string) => {
  const now = new Date();
  const publishedDate = new Date(publishTime);
  const timeDiff = now.getTime() - publishedDate.getTime(); // Difference in milliseconds

  // Convert time difference from milliseconds to minutes, hours, days, etc.
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximate, varies depending on the month
  const years = Math.floor(days / 365);

  // Define the time period string based on the elapsed time
  let period;
  if (years > 0) period = `${years} year${years > 1 ? "s" : ""} ago`;
  else if (months > 0) period = `${months} month${months > 1 ? "s" : ""} ago`;
  else if (weeks > 0) period = `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  else if (days > 0) period = `${days} day${days > 1 ? "s" : ""} ago`;
  else if (hours > 0) period = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  else if (minutes > 0)
    period = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  else if (seconds > 0)
    period = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  else period = "just now";

  return period;
};

export const defineSubscribers = (subscriberCount: string) => {
  // Ensure subscriberCount is a number
  const count = parseInt(subscriberCount, 10);

  // Check if the count is less than 1000, return it directly with "subscribers"
  if (count < 1000) {
    return `${count} subscribers`;
  }

  // For 1000 and above, format with "K" and one decimal place
  const formattedCount = (count / 1000).toFixed(1);

  // Remove any unnecessary decimal .0 to keep the formatting clean
  const cleanFormattedCount = formattedCount.endsWith(".0")
    ? formattedCount.slice(0, -2)
    : formattedCount;

  return `${cleanFormattedCount}K subscribers`;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
