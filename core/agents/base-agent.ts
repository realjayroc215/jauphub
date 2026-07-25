export const BaseAgent = {
  name: "BaseAgent",
  version: "1.0",
  run(input) {
    return {
      agent: "BaseAgent",
      received: input,
      status: "active"
    };
  }
};
