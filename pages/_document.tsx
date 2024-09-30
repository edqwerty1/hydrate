import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  if (typeof window !== "undefined") {
    console.log("DOCUMENT START", performance.now());
  }

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
