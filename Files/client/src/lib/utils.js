import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import animationData from "@/assets/lottie-json";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colors = [
  "bg-gradient-to-r from-[#712c4a57] to-[#ff477e] text-[#ff006e] border-[1px] border-[#ff006faa] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out",
  "bg-gradient-to-r from-[#ffd60a2a] to-[#f9a602] text-[#ffd60a] border-[1px] border-[#ffd60abb] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out",
  "bg-gradient-to-r from-[#06d6a02a] to-[#03a97d] text-[#06d6a0] border-[1px] border-[#06d6a0bb] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out",
  "bg-gradient-to-r from-[#4cc9f02a] to-[#1f8bd3] text-[#4cc9f0] border-[1px] border-[#4cc9f0bb] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out",
];

export const getColor = (color) => {
  if (color >= 0 && color < colors.length) {
    return colors[color];
  }
  return colors[0]; // Fallback to the first color if out of range
};

export const animationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
