# Instructions

1. `npm i`
2. Assert `tsconfig.json` contains `@wdio/sync` in is types array
3. Go to `specs/basic.specs.ts`. `browser.setupInterceptor` should returns `void`
4. Run the test `npx wdio.conf.js` they works fine (we're interested in the transpilation mostly, the test results etc doesn't really matter).
5. Modify `tsconfig.json` by replacing `@wdio/sync` by `webdriverio`
6. Go to `specs/basic.specs.ts`. `browser.setupInterceptor` should returns `Promise<void>`
7. Run the test `npx wdio.conf.js` they works fine (we're interested in the transpilation mostly, the test results etc doesn't really matter).