import { useEffect } from "react";

export const Header = () => {
  console.log("HEADER START", performance.now());
  const start = Date.now();
  while (Date.now() - start < 50) {}
  useEffect(() => {
    console.log("HEADER HYDRATE", performance.now());
  }, []);

  return (
    <div
      style={{
        backgroundColor: "green",
        width: "100%",
        height: "50px",
      }}
    >
      Header
    </div>
  );
};
