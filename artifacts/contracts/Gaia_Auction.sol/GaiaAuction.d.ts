// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface GaiaAuction$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "GaiaAuction",
  "sourceName": "contracts/Gaia_Auction.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "biddingTime",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "beneficiaryAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AuctionAlreadyEnded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AuctionEndAlreadyCalled",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AuctionNotYetEnded",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "highestBid",
          "type": "uint256"
        }
      ],
      "name": "BidNotHighEnough",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotEnoughEthSent",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "winner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "AuctionEnded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "bidder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint16",
              "name": "lat",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "lng",
              "type": "uint16"
            }
          ],
          "indexed": false,
          "internalType": "struct GaiaAuction.Loc",
          "name": "location",
          "type": "tuple"
        }
      ],
      "name": "HighestBidIncreased",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "auctionEndTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "beneficiary",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint16",
              "name": "lat",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "lng",
              "type": "uint16"
            }
          ],
          "internalType": "struct GaiaAuction.Loc[]",
          "name": "locs",
          "type": "tuple[]"
        }
      ],
      "name": "bid",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "bidAmount",
          "type": "uint256"
        }
      ],
      "name": "getNextBid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "name": "highestBids",
      "outputs": [
        {
          "internalType": "address",
          "name": "bidder",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "bidAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162000db238038062000db2833981810160405281019062000037919062000138565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508142620000859190620001ae565b6001819055505050620001e9565b600080fd5b6000819050919050565b620000ad8162000098565b8114620000b957600080fd5b50565b600081519050620000cd81620000a2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200010082620000d3565b9050919050565b6200011281620000f3565b81146200011e57600080fd5b50565b600081519050620001328162000107565b92915050565b6000806040838503121562000152576200015162000093565b5b60006200016285828601620000bc565b9250506020620001758582860162000121565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001bb8262000098565b9150620001c88362000098565b9250828201905080821115620001e357620001e26200017f565b5b92915050565b610bb980620001f96000396000f3fe6080604052600436106100555760003560e01c806338af3eed1461005a5780633ccfd60b146100855780634b449cba146100b057806357d68932146100db5780639760c86b14610118578063a2553d0914610156575b600080fd5b34801561006657600080fd5b5061006f610172565b60405161007c91906106cf565b60405180910390f35b34801561009157600080fd5b5061009a610196565b6040516100a79190610705565b60405180910390f35b3480156100bc57600080fd5b506100c56102ba565b6040516100d29190610739565b60405180910390f35b3480156100e757600080fd5b5061010260048036038101906100fd9190610794565b6102c0565b60405161010f9190610739565b60405180910390f35b34801561012457600080fd5b5061013f600480360381019061013a91906107fb565b61034f565b60405161014d92919061085c565b60405180910390f35b610170600480360381019061016b9190610a33565b6103a0565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111156102b1576000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050506102b05780600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060009150506102b7565b5b60019150505b90565b60015481565b600066038d7ea4c680008210156102e05766038d7ea4c68000905061034a565b662386f26fc100008210156103095766038d7ea4c68000826103029190610aab565b905061034a565b67016345785d8a000082101561033357662386f26fc100008261032c9190610aab565b905061034a565b67016345785d8a0000826103479190610aab565b90505b919050565b6002602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b6001544211156103dc576040517fd02e774d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008151116103ea57600080fd5b60003490506000805b835181101561068857600084828151811061041157610410610adf565b5b60200260200101519050600060026000836000015161ffff1661ffff1681526020019081526020016000206000836020015161ffff1661ffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050905060006104d582602001516102c0565b905080856104e39190610aab565b945084861161051e576040517fe16b18b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816020015160036000846000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105759190610aab565b92505081905550600060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381525090508060026000866000015161ffff1661ffff1681526020019081526020016000206000866020015161ffff1661ffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050507f8234da91eaf5f3c4ea4179e04c984b8faa307939ab7e6916db4b01aedbc22b4133838660405161066f93929190610b4c565b60405180910390a15050505080806001019150506103f3565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b98261068e565b9050919050565b6106c9816106ae565b82525050565b60006020820190506106e460008301846106c0565b92915050565b60008115159050919050565b6106ff816106ea565b82525050565b600060208201905061071a60008301846106f6565b92915050565b6000819050919050565b61073381610720565b82525050565b600060208201905061074e600083018461072a565b92915050565b6000604051905090565b600080fd5b600080fd5b61077181610720565b811461077c57600080fd5b50565b60008135905061078e81610768565b92915050565b6000602082840312156107aa576107a961075e565b5b60006107b88482850161077f565b91505092915050565b600061ffff82169050919050565b6107d8816107c1565b81146107e357600080fd5b50565b6000813590506107f5816107cf565b92915050565b600080604083850312156108125761081161075e565b5b6000610820858286016107e6565b9250506020610831858286016107e6565b9150509250929050565b60006108468261068e565b9050919050565b6108568161083b565b82525050565b6000604082019050610871600083018561084d565b61087e602083018461072a565b9392505050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108d38261088a565b810181811067ffffffffffffffff821117156108f2576108f161089b565b5b80604052505050565b6000610905610754565b905061091182826108ca565b919050565b600067ffffffffffffffff8211156109315761093061089b565b5b602082029050602081019050919050565b600080fd5b600080fd5b60006040828403121561096257610961610947565b5b61096c60406108fb565b9050600061097c848285016107e6565b6000830152506020610990848285016107e6565b60208301525092915050565b60006109af6109aa84610916565b6108fb565b905080838252602082019050604084028301858111156109d2576109d1610942565b5b835b818110156109fb57806109e7888261094c565b8452602084019350506040810190506109d4565b5050509392505050565b600082601f830112610a1a57610a19610885565b5b8135610a2a84826020860161099c565b91505092915050565b600060208284031215610a4957610a4861075e565b5b600082013567ffffffffffffffff811115610a6757610a66610763565b5b610a7384828501610a05565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ab682610720565b9150610ac183610720565b9250828201905080821115610ad957610ad8610a7c565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b610b17816107c1565b82525050565b604082016000820151610b336000850182610b0e565b506020820151610b466020850182610b0e565b50505050565b6000608082019050610b61600083018661084d565b610b6e602083018561072a565b610b7b6040830184610b1d565b94935050505056fea26469706673582212209dc2710d0e9416ccbb66d822eeb70fd705c957de0b4621718a6cbf12d4a5fd0364736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436106100555760003560e01c806338af3eed1461005a5780633ccfd60b146100855780634b449cba146100b057806357d68932146100db5780639760c86b14610118578063a2553d0914610156575b600080fd5b34801561006657600080fd5b5061006f610172565b60405161007c91906106cf565b60405180910390f35b34801561009157600080fd5b5061009a610196565b6040516100a79190610705565b60405180910390f35b3480156100bc57600080fd5b506100c56102ba565b6040516100d29190610739565b60405180910390f35b3480156100e757600080fd5b5061010260048036038101906100fd9190610794565b6102c0565b60405161010f9190610739565b60405180910390f35b34801561012457600080fd5b5061013f600480360381019061013a91906107fb565b61034f565b60405161014d92919061085c565b60405180910390f35b610170600480360381019061016b9190610a33565b6103a0565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111156102b1576000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050506102b05780600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060009150506102b7565b5b60019150505b90565b60015481565b600066038d7ea4c680008210156102e05766038d7ea4c68000905061034a565b662386f26fc100008210156103095766038d7ea4c68000826103029190610aab565b905061034a565b67016345785d8a000082101561033357662386f26fc100008261032c9190610aab565b905061034a565b67016345785d8a0000826103479190610aab565b90505b919050565b6002602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b6001544211156103dc576040517fd02e774d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008151116103ea57600080fd5b60003490506000805b835181101561068857600084828151811061041157610410610adf565b5b60200260200101519050600060026000836000015161ffff1661ffff1681526020019081526020016000206000836020015161ffff1661ffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050905060006104d582602001516102c0565b905080856104e39190610aab565b945084861161051e576040517fe16b18b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816020015160036000846000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105759190610aab565b92505081905550600060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381525090508060026000866000015161ffff1661ffff1681526020019081526020016000206000866020015161ffff1661ffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050507f8234da91eaf5f3c4ea4179e04c984b8faa307939ab7e6916db4b01aedbc22b4133838660405161066f93929190610b4c565b60405180910390a15050505080806001019150506103f3565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b98261068e565b9050919050565b6106c9816106ae565b82525050565b60006020820190506106e460008301846106c0565b92915050565b60008115159050919050565b6106ff816106ea565b82525050565b600060208201905061071a60008301846106f6565b92915050565b6000819050919050565b61073381610720565b82525050565b600060208201905061074e600083018461072a565b92915050565b6000604051905090565b600080fd5b600080fd5b61077181610720565b811461077c57600080fd5b50565b60008135905061078e81610768565b92915050565b6000602082840312156107aa576107a961075e565b5b60006107b88482850161077f565b91505092915050565b600061ffff82169050919050565b6107d8816107c1565b81146107e357600080fd5b50565b6000813590506107f5816107cf565b92915050565b600080604083850312156108125761081161075e565b5b6000610820858286016107e6565b9250506020610831858286016107e6565b9150509250929050565b60006108468261068e565b9050919050565b6108568161083b565b82525050565b6000604082019050610871600083018561084d565b61087e602083018461072a565b9392505050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108d38261088a565b810181811067ffffffffffffffff821117156108f2576108f161089b565b5b80604052505050565b6000610905610754565b905061091182826108ca565b919050565b600067ffffffffffffffff8211156109315761093061089b565b5b602082029050602081019050919050565b600080fd5b600080fd5b60006040828403121561096257610961610947565b5b61096c60406108fb565b9050600061097c848285016107e6565b6000830152506020610990848285016107e6565b60208301525092915050565b60006109af6109aa84610916565b6108fb565b905080838252602082019050604084028301858111156109d2576109d1610942565b5b835b818110156109fb57806109e7888261094c565b8452602084019350506040810190506109d4565b5050509392505050565b600082601f830112610a1a57610a19610885565b5b8135610a2a84826020860161099c565b91505092915050565b600060208284031215610a4957610a4861075e565b5b600082013567ffffffffffffffff811115610a6757610a66610763565b5b610a7384828501610a05565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ab682610720565b9150610ac183610720565b9250828201905080821115610ad957610ad8610a7c565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b610b17816107c1565b82525050565b604082016000820151610b336000850182610b0e565b506020820151610b466020850182610b0e565b50505050565b6000608082019050610b61600083018661084d565b610b6e602083018561072a565b610b7b6040830184610b1d565b94935050505056fea26469706673582212209dc2710d0e9416ccbb66d822eeb70fd705c957de0b4621718a6cbf12d4a5fd0364736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "GaiaAuction",
    constructorArgs: [biddingTime: AbiParameterToPrimitiveType<{"name":"biddingTime","type":"uint256"}>, beneficiaryAddress: AbiParameterToPrimitiveType<{"name":"beneficiaryAddress","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<GaiaAuction$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Gaia_Auction.sol:GaiaAuction",
    constructorArgs: [biddingTime: AbiParameterToPrimitiveType<{"name":"biddingTime","type":"uint256"}>, beneficiaryAddress: AbiParameterToPrimitiveType<{"name":"beneficiaryAddress","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<GaiaAuction$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "GaiaAuction",
    constructorArgs: [biddingTime: AbiParameterToPrimitiveType<{"name":"biddingTime","type":"uint256"}>, beneficiaryAddress: AbiParameterToPrimitiveType<{"name":"beneficiaryAddress","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<GaiaAuction$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Gaia_Auction.sol:GaiaAuction",
    constructorArgs: [biddingTime: AbiParameterToPrimitiveType<{"name":"biddingTime","type":"uint256"}>, beneficiaryAddress: AbiParameterToPrimitiveType<{"name":"beneficiaryAddress","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<GaiaAuction$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "GaiaAuction",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<GaiaAuction$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Gaia_Auction.sol:GaiaAuction",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<GaiaAuction$Type["abi"]>>;
}
