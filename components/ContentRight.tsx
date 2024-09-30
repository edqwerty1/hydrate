import { useEffect } from "react";

export const ContentRight = () => {
  console.log("CONTENT RIGHT START", performance.now());
  const start = Date.now();
  while (Date.now() - start < 50) {}
  useEffect(() => {
    console.log("CONTENT RIGHT HYDRATE", performance.now());
  }, []);

  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "50%",
        height: "100vh",
      }}
      id="content-right"
    >
      ContentRight
    </div>
  );
};
