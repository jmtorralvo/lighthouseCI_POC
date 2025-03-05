# Integrate lighthouse CI (POC)

This example project is used to check how works lighthouse CI in the pipeline.

We deployed it using [github actions](https://github.com/features/actions) and we used github actions to integrate the performance tool.

The project is a basic scafolding done with [Vite + React](https://vite.dev/guide/)

More info about lighthouseCI:
https://github.com/GoogleChrome/lighthouse-ci

### Steps:

* Install @lhci/cli for testing it locally
* Create a lighthouse.cjs file
* Populate it with the config you want (https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#configuration-file)

### For Github:
* Enable Gitub actions
* Add homepage to your package.json
* Install lighthouseci app to github
* Get the lhci Token and add it into repo secrets with the name LHCI_GITHUB_APP_TOKEN
* Add a .yml file where add the lhci job. Ex:

```
jobs:
  lhci:
    name: Lighthouse
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js 20.x
        uses: actions/setup-node@v3
        with:
          node-version: 20.x
      - name: npm install, build
        run: |
          npm install
          npm run build
      - name: run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.14.x
          lhci autorun 

