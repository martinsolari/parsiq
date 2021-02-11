# PARSIQ
![](https://i.imgur.com/GftojO4.png)




PARSIQ is a blockchain-to-everything platform that turns data into actions. It allows users to connect real-time blockchain events to off-chain apps. Automate any workflows and build creative IFTTT triggers across different blockchains.

Create a data rich Ethereum block explorer leveraging  using PARSIQ Ethereum node API 

It should be able to present and explore various data provided by our API, for example hierarchical traces of all transactions in a block together with their time-codes in terms of gas.

We expect the team to build a complete Web Application (backend and frontend) that potentially could evolve into a real public block explorer with transaction debugging functionality enabled by PARSIQ features.

https://youtu.be/Y4nOLUnlcos




Sources: 
EthDenver https://www.ethdenver.com/post/parsiq

Web https://www.parsiq.net/en/
Portal https://portal.parsiq.net/
Node : https://ethdenver-parsiq.net:2096/
Starter Pack: https://github.com/parsiq/ethdenver_2021
API: https://docs.parsiq.net

https://ethdenver-parsiq.net:2096/
MD Color Pallette: https://material.io/design/color/the-color-system.html#tools-for-picking-colors


github Repo https://github.com/aadorian/ethdenver_parsiq.git

https://material-ui.com/components/icons/#usage
npm install @material-ui/icons

# SnapShot

![](https://i.imgur.com/h5p7SWV.png)
![](https://i.imgur.com/LOndeTd.png)
![](https://i.imgur.com/LMdIrAa.png)
![](https://i.imgur.com/jsx2FWP.png)
![](https://i.imgur.com/4AZSbu6.png)
![](https://i.imgur.com/XhOqo0m.png)
![](https://i.imgur.com/bvC8oXM.png)
![](https://i.imgur.com/oodTxlO.png)




# Dependenc   
```json=
@etclabscore/eserialize": "^1.0.2",
    "@etclabscore/ethereum-json-rpc": "^1.3.13",
    "@etclabscore/ethereum-json-rpc-
    "@etclabscore/jade-service-runner-client": "^1.10.5",
    "@material-ui/core": "^4.5.2",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/styles": "^4.5.2",
    "@monaco-editor/react": "^2.1.1",
    "@qiwi/semantic-release-gh-pages-plugin": "^1.14.2",
    "@semantic-release/changelog": "^3.0.5",
    "@semantic-release/commit-analyzer": "^6.3.3",
    "@semantic-release/git": "^7.0.18",
    "@semantic-release/github": "^5.5.5",
    "@semantic-release/npm": "^5.3.4",
    "@semantic-release/release-notes-generator": "^7.3.2",
    "bignumber.js": "^9.0.0",
    "ethereumjs-util": "^6.1.0",
    "ethjs-unit": "^0.1.6",
    "history": "^4.9.0",
    "i18next": "^17.3.1",
    "i18next-browser-languagedetector": "^3.1.1",
    "lodash": "^4.17.20",
    "moment": "^2.24.0",
    "qs": "^6.5.2",
    "query-string": "^6.8.3",
    "raf": "^3.4.0",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-i18next": "^10.13.2",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "reusable": "^1.0.0-alpha.12",
    "semantic-release": "^15.13.30",
    "semantic-release-docker": "^2.2.0",
    "use-dark-mode": "^2.3.1",
    "use-interval": "^1.1.0",
    "use-query-params": "^0.4.6",
    "use-react-router": "^1.0.7",
    "victory": "^33.1.3"

```


# Run 

```json=
  "testnet": "REACT_APP_ETH_RPC_URL=https://ethdenver-parsiq.net:2096 && npm start && npm run service-runner",
  
```


# Configuration: 

Variants
```typescript=
import { darkTheme, lightTheme } from "./themes/parsiqTheme";
```
```jsonld=
import { createMuiTheme,  responsiveFontSizes  } from "@material-ui/core/styles";


export const lightTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
```
```css

export const darkTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "dark",
    background: {
      default: grey[900],
      paper: "#279dff",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        overflow: "visible !important",
      },
    },
    MuiTable: {
      root: {
        background: "transparent !important",
      },
      
    },
    MuiMenuItem : {
        root: {
          color: "#52CBC9  !important",
        },
       },
    MuiLink: {
        root: {
          color: 'linear-gradient(45deg, #cc7504 30%, #04bfcc  90%)'
        },
    },
    MuiButton: {
      root: {
        color: "#279dff !important",
      },
    },
    MuiTextField: {
        root: {      
          overflow: "visible !important",
          color: "#279dff"
        },
    },
    MuiTypography: {
        root: {
            outlineStyle: "#008dff",
            color: "#045bcc" ,
          },
    },
  },
}));
```
in App.css 

```css
::-webkit-scrollbar-track {
  background: #0d3bad;
  z-index: 1;
}

::-webkit-scrollbar-thumb {
  background: #56afff;
  border-radius: 5px;
}
```
in Blocklist.ts

```typescript=
const authorHashStyle = {
             
             borderLeft: `1em solid #04${b.miner.substring(4,8)}`,
            };
```
   
