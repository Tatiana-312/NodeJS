import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  let initialNumber = 10;
  const cpu = os.cpus();

  const promises = cpu.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./worker.js", {
        workerData: initialNumber++,
      });
      worker.on("message", (result) => resolve(result));
      worker.on("error", (error) => reject(error));
    });
  });

  const arrOfWorkerResults = await Promise.allSettled(promises);

  const result = arrOfWorkerResults.map(({ status, value }) => {
    if (status === "fulfilled") {
      return { status: "resolved", data: value };
    } else {
      return { status: "error", data: null };
    }
  });
  console.log(result);
};

await performCalculations();
