const config: WebdriverIO.Config = {
  runner: "local",
  path: "/",
  specs: ["./specs/**/*.ts"],
  exclude: [],
  maxInstances: 5,
  logLevel: "error",
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      browserVersion: "80.0",
      "goog:chromeOptions": {
        args: ["--disable-gpu", "--no-sandbox", "--window-size=1440,1080"]
      }
    }
  ],
  bail: 1,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 30000,
  connectionRetryCount: 2,
  services: ["chromedriver", "intercept"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 5 * 60 * 1e3,
    bail: 1,
    retries: 5,
    require: ["tsconfig-paths/register"]
  }
};

export { config };
