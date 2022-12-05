import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const worker = new Worker('./worker.js', {
        workerData: 10
    });

    worker.on('message', msg => {
        console.log(msg);
    });
};

await performCalculations();