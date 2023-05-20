var ethers = require('ethers');
var url = 'https://lively-intensive-film.ethereum-goerli.discover.quiknode.pro/c663c28234903810bbc2066e48ef59b8c8f903eb/';
var provider = new ethers.JsonRpcProvider(url);
var address  = '0xb3Bb8Baa9Aea0c2e6c12d8fAe40c70fA04496020';
var abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "x",
                "type": "string"
            }
        ],
        "name": "sendHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getHash",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
var contract = new ethers.Contract(address,abi,provider);
(async function() {
	console.log(await contract.getHash())
	console.log("This is an asynchronous anonymous function.");
  })();
  