import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    console.log("APP START", performance.now());
  }
  const start = Date.now();
  while (Date.now() - start < 50) {}

  useEffect(() => {
    console.log("APP HYDRATE", performance.now());
    if (window.location.pathname === "/fast")
      document.getElementById("body")?.click();
  }, []);

  return <Component {...pageProps} />;
}
