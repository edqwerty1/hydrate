import { Suspense, useEffect } from "react";
import { ContentLeft } from "./ContentLeft";
import { ContentRight } from "./ContentRight";

export const Body = () => {
  console.log("BODY START", performance.now());
  const start = Date.now();
  while (Date.now() - start < 50) {}
  useEffect(() => {
    console.log("BODY HYDRATE", performance.now());
    if (window.location.pathname === "/fast")
      document.getElementById("content-right")?.click();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "100%",
        height: "100vh",
      }}
    >
      Body
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        id="body"
      >
        <Suspense>
          <ContentLeft />
        </Suspense>
        <Suspense>
          <ContentRight />
        </Suspense>
      </div>
    </div>
  );
};
