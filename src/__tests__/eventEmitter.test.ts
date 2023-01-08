import { EventEmitter } from "events";

describe("EventEmitter", () => {
  it("EventEmitter", async () => {
    const em = new EventEmitter();
    em.setMaxListeners(1);

    em.on("a", () => {
      console.log("a1");
    });
    em.on("a", () => {
      console.log("a2");
    });
    em.emit("a");
  });
});
