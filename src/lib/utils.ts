import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteInfo } from "@/data/siteInfo";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Day = keyof typeof siteInfo.hours;

export function getOpeningStatus() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const currentTime = now.getHours() + now.getMinutes() / 60;

  const dayNames: Day[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const todayName = dayNames[dayOfWeek];

  const todayHours = siteInfo.hours[todayName];

  if (!todayHours) {
    return { isOpen: false, closesAt: null, opensAt: null };
  }

  const { open, close, open2, close2 } = todayHours;

  // Check first service
  if (open && close && currentTime >= open && currentTime < close) {
    return { isOpen: true, closesAt: close, opensAt: null };
  }

  // Check second service
  if (open2 && close2 && currentTime >= open2 && currentTime < close2) {
    return { isOpen: true, closesAt: close2, opensAt: null };
  }

  // If closed, find next opening time
  let nextOpenTime = null;
  if (open && currentTime < open) {
    nextOpenTime = open;
  } else if (open2 && currentTime < open2) {
    nextOpenTime = open2;
  }

  return { isOpen: false, closesAt: null, opensAt: nextOpenTime };
}

export function formatHour(hour: number | null): string {
  if (hour === null) return "";
  const h = Math.floor(hour);
  const m = Math.round((hour - h) * 60);
  return `${h.toString().padStart(2, '0')}h${m.toString().padStart(2, '0')}`;
}
