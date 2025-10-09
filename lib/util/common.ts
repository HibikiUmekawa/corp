import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function normalize(value: number, min: number, max: number): number {
  if (max === min) return 0;

  return (value - min) / (max - min);
}
export const smoothScrollBy = (y: number, duration: number) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // ease-out のイージング関数で、終了時にゆっくりになるようにする
    const easeOutProgress = progress * (2 - progress);

    window.scrollTo(0, start + y * easeOutProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};
export const scrollToBottom = (delay?: number) => {
  const scroll = () => {
    const targetY = document.documentElement.scrollHeight - window.innerHeight;

    smoothScrollBy(targetY - window.scrollY, 300);
  };

  if (delay) {
    setTimeout(scroll, delay);
  } else {
    scroll();
  }
};

/**
 * ページトップにスクロール
 * @param delay 遅延時間
 * @returns void
 */
export const scrollToTop = (delay?: number) => {
  const scroll = () => {
    smoothScrollBy(-window.scrollY, 300);
  };

  if (delay) {
    setTimeout(scroll, delay);
  } else {
    scroll();
  }
};
