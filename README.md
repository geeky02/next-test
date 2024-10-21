# multisig wallet

## Introduction


A Multisig (multiple signature) wallet requires multiple signers to approve transactions, offering enhanced security and collective management over funds. This is useful for organizations or groups looking to share control of a wallet among multiple parties.      

This multisig wallet allows users to securely create and manage wallets with multiple signers on Polkadot chains. Designed with enhanced security and collaboration in mind, users can easily set up wallets that require the approval of multiple parties for transactions and wallet management, ensuring transparency and protection for all stakeholders.

In addition to standard multisig functionality, users can:

- Stake/Unstake tokens: Seamlessly stake or unstake their assets to a subnet.
- Subnet Management: Register new subnets and participate in some dynamic ecosystems

This multisig wallet is built to streamline asset management, staking, and network participation, offering a user-friendly experience within the Polkadot ecosystem.

## Overview

The repo is split into a number of packages, each representing an application.  
This multisig wallet provides a view and interaction layer from a browser.

## Development

Contributions are welcome!

To start off, this repo (along with others in the [@polkadot](https://github.com/polkadot-js/) family) uses yarn workspaces to organize the code. As such, after cloning dependencies _should_ be installed via `yarn`, not via npm, the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/polkadot-js/apps <optional local path>`
2. Ensure that you have a recent LTS version of Node.js, for development purposes [Node >= 16](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >= 1.22](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn`
5. Ready! Now you can launch the UI (assuming you have a local Polkadot Node running), via `yarn run start`
6. Access the UI via [http://localhost:3000](http://localhost:3000)


## Docker

You can run a docker container via -

```
docker run --rm -it --name polkadot-ui -e WS_URL=ws://someip:9944 -p 80:80 jacogr/polkadot-js-apps:latest
```

To build a docker container containing local changes -

```
docker build -t jacogr/polkadot-js-apps -f docker/Dockerfile .
```

When using these Docker commands, you can access the UI via http://localhost:80 (or just http://localhost)
