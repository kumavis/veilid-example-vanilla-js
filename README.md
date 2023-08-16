# veilid-example-vanilla-js

This repo is an example of an application that runs a [Veilid](https://gitlab.com/veilid/veilid) node in the browser using the veilid-wasm APIs.

This application is the simpliest vanilla JS setup I can think of. It utilizes [JavaScript modules](https://caniuse.com/es6-module), which are natively supported in modern browsers, to avoid the need for bundling/compiling.

## Getting started

The only thing you need to run the application is to serve the contents of the repo with a webserver.

If you have `npm` and `node` installed, you can run `npx serve` from the root of this repo to start up a webserver, and go to the address emitted by the server (likely http://localhost:3000).

You can interact with the veild-wasm API via the `veild` global that the application sets during initialization. For example:

`console.log(await veilid.debug('help'))` will list the available debug commands, just like when using the `veilid-cli`.

## Known issues

- The included veilid-wasm bindings were compiled with some fixes that have not been merged into the `main` branch of the [veilid repo](https://gitlab.com/veilid/veilid). I submitted the fixes in an MR here: https://gitlab.com/veilid/veilid/-/merge_requests/124
- There's also an issue where the node does not have any `dialinfo`` even after finding peers and attaching to the network, and likely will not be able to send or recieve message other nodes on the network. Still working on documenting the issue.
