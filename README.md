### This is a sample repository for writing tests with Playwright, TypeScript and Synpress V4 (using Phantom wallet) 

### Steps 
(note that there might be better or faster steps)

1 - Create a repository in github UI.

2 - Clone that repository in your local machine.

3 - Run `yarn` to create yarn.lock file.

4 - Create `.gitignore` file and add "node_modules"

5 - Install latest playwright version: `yarn create playwright`
https://playwright.dev/docs/intro#installing-playwright
During playwright installation select:
- TypeCScript
- All other default options

6 - Install latest synpress v4: `yarn add @synthetixio/synpress@latest`

7 - Install typescript: `yarn add --dev typescript`

8 - Add `tsconfig.json` file (you can copy-paste the file in this repository)

9 - Add synpress basic set up file
- You can copy-paste the file in synpress examples: https://github.com/Synthetixio/synpress/blob/new-dawn/examples/metamask/test/wallet-setup/basic.setup.ts
- You can place the file in any folder, for example in  `./wallet-setup`

10 - Create a basic test using synpres
- You can copy-paste `testingWithSynpress.spec.ts` file found in this repository (`./tests/testingWithSynpress.spec.ts`), which is based in sample test from synpress examples (https://github.com/Synthetixio/synpress/blob/new-dawn/examples/metamask/test/playwright/01_basic.spec.ts)

11 - Add the folowing script to `package.json` file: `"run-tests": "npx playwright test"`

12 - Add `"type": "module",` to `package.json` file to avoid import errors.

13 - Add `baseURL: 'https://summer.fi',` to `playwright.config.ts` file.

14 - Comment out `firefox` and `webkit` projects in `playwright.config.ts` file so that test run only once, in chromium.

15 - Run the test
- Add a `.only` tag to the test previously added so that only that test is executed.
- Then run the test with `yarn run-tests`

16 - Observe cache error: `Error: Cache for 532f685e346606c2a803 does not exist. Create it first!`

17 - Create synpress cache by running: `synpress ./wallet-setup --phantom`
https://synpress.io/docs/guides/wallet-cache#building-the-cache
- Note that we need to add the path to the setup file we previous created. Unless we hadd added the file to a `./test/wallet-setup` folder (in that case `yarn synpress` would be enough)
- Note that we need to add a `--phantom` flag. Otherwise it will try to create cache for Metamask.
- A Phantom window should be opened.
- A `.cache-synpress` folder should have been added to the repository root.
- Note that you can add a script to `package.json` (for example `"phantom-cache": "synpress ./wallet-setup --phantom"`) and then run `yarn phantom-cache`.

18 - Add `.cache-synpress` to `.gitignore` file

19 - Run the test again: `yarn run-tests`
Everything should work now.

.