import localFont from "next/font/local";

export const interDisplay = localFont({
  src: [
    {
      path: "./InterDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./InterDisplay-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./InterDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./InterDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./InterDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./InterDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./InterDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./InterDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./InterDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});
