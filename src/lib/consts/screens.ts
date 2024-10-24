export const screenWidth = {
  phone: "max-width: 480px",
  tablet: "max-width: 768px",
  desktop: "max-width: 1024px",
  wide: "max-width: 1200px",
} as const;

export type ScreenType = keyof typeof screenWidth;
