import { useEffect } from "react";

export const ContentLeft = () => {
  console.log("CONTENT LEFT START", performance.now());
  const start = Date.now();
  while (Date.now() - start < 50) {}
  useEffect(() => {
    console.log("CONTENT LEFT HYDRATE", performance.now());
  }, []);

  return (
    <div
      style={{
        backgroundColor: "red",
        width: "50%",
        height: "100vh",
      }}
    >
      ContentLeft
    </div>
  );
};
