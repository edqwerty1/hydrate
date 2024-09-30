function start() {
  console.log("start 5th 3rd party script", performance.now());
  // lock main thread for 1 second
  const start = Date.now();
  while (Date.now() - start < 1000) {}
  console.log("end 5th 3rd party script", performance.now());
}

start();
