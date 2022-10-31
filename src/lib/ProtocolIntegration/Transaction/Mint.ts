import Web3 from "web3";
import { AbiItem } from 'web3-utils';
import * as dotenv from "dotenv";


//Configuring the directory path to access .env file
dotenv.config();

let encoded_tx : Promise<any>;

export const MintAsync = async() : Promise<any>=> {

  // Setting up Ethereum blockchain Node through Infura
  const web3 = new Web3(process.env.infuraUrlRinkeby!);
  //Providing Private Key
  //const activeAccount = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
  //Calling ABI
  const Mint = require('../../../lib/abi/Compound/Mint.json');
  //Creating an instance of Token cEth
  const cEthContract = new web3.eth.Contract(Mint as AbiItem[], process.env.cEthRnkbyAddress);

  //encoded_tx  = new Promise<any>(async(resolve,reject)=>{

    //let tx_builder: any;
    
    try {

       //Returning receipt for "Encoded ABI"
        encoded_tx = cEthContract.methods.mint().encodeABI();
    
      /*  //Getting count for Nonce
        const txCount = await web3.eth.getTransactionCount(activeAccount.address);

        
        // Creating transaction object to pass it through "signTransaction"
        let transactionObject1: TransactionConfig = {
        nonce: txCount,
        from: activeAccount.address,
        to: process.env.cEthRnkbyAddress,
        gas: web3.utils.toHex(4300000),
        gasPrice: web3.utils.toHex(4200000000),
        data: encoded_tx,
        value:web3.utils.toWei(ethQuantity, 'ether'),
        
    }*/

    //Calling Send Transaction
    //let txReceipt = await sendTransaction(web3,transactionObject1);
    //console.log("Mint Transaction Succeded : ");

           

          } catch (error) {
            
            throw(error);
          }
  //  });

  return encoded_tx;
  
}

