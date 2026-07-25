import { JAUPCoreV4 } from "./core/engine-v4.js";

console.log("JAUP Background Worker started…");

async function loop() {
  await JAUPCoreV4.emit("worker-heartbeat", { time: Date.now() });
  console.log("JAUP Worker tick");
  setTimeout(loop, Number(process.env.JAUP_WORKER_INTERVAL || 5000));
}

loop();
