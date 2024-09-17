import { type ClassValue, clsx } from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollIntoView = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }
};

export function downloadFile(path: string) {
  const [downloading, setDownloading] = useState(false);

  fetch(path)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // Extract filename from URL, fallback to 'download' if undefined
      const filename = path.split("/").pop() || "download";
      a.download = filename;

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setDownloading(false);
    });

  return downloading;
}
