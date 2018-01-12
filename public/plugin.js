

const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_campaignId",
        "type": "uint128"
      },
      {
        "name": "_tokenIdx",
        "type": "uint16"
      }
    ],
    "name": "createCertificate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "purchaser",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "certificateId",
        "type": "uint256"
      }
    ],
    "name": "Issue",
    "type": "event"
  }
]

