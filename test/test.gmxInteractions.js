const { assert, expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const { GMX_TOKEN } = require('../config');
const { ethers, network } = require('hardhat');
const abi_IERC20 = require('../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json');

let provider, signer;
let GMXToken;

describe("0-0 :: GMX test on Arbitrum Mainnet", function () {
    beforeEach(async function () {
        provider = new ethers.providers.Web3Provider(network.provider);
        [signer] = await ethers.getSigners();

        GMXToken = await ethers.getContractAt("IERC20", GMX_TOKEN, signer);
    });

    it("0-0-00 :: Testing", async function () {
        let balance = await GMXToken.totalSupply();
        console.log(balance);
    });

    it("0-1-00 :: Test with raw abi", async function () {
        let abi= [{
            "inputs": [],
            "name": "gov",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }],
            "stateMutability": "view",
            "type": "function"
        }];

        let GMXToken_govCaller = await ethers.getContractAt(abi, GMX_TOKEN, signer);
        let gov = await GMXToken_govCaller.gov();

        console.log(gov);
    });
})
  