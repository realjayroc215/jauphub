export const TIERS = {
  FREE: {
    price: 0,
    apps: 10,
    ads: true,
    apexAI: "basic"
  },
  PRO: {
    price: 9.99,
    apps: 100,
    ads: false,
    apexAI: "fast"
  },
  ULTRA: {
    price: 29.99,
    apps: 500,
    ads: false,
    apexAI: "full",
    drive: true,
    workspace: true
  },
  GOD: {
    price: 99.0,
    apps: 1000,
    ads: false,
    apexAI: "unlimited",
    api: true,
    swarm: true,
    agents: true
  }
};
