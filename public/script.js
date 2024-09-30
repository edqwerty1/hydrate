function start() {
  console.log("start 1st 3rd party script", performance.now());
  // lock main thread for 1 second
  const start = Date.now();
  while (Date.now() - start < 1000) {}
  console.log("end 1st 3rd party script", performance.now());
  const script = document.createElement("script");
  script.src = "/script2.js";
  document.body.appendChild(script);
}

start();
