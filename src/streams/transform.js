import { Transform } from "stream"

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const chunkString = chunk.toString();
            const reversedChunk = chunkString.split('').reverse().join('').trim();
            callback(null, `${reversedChunk}\n`);
        }
    })

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();