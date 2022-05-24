require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain eternal install brand forget seat'; 
let testAccounts = [
"0x839c2b7e7e0b856ad503b3588e921e5f6dcd1f4ac2835b008918828a97e67091",
"0xeb72c1dd4c1d5ac16c51c0e55a6da9adf21d20fefe862eab9bfc5b3be221dbc5",
"0xd37545cd701f8a981b710bf84693f937a0063cc7ea26c9457f7429c95fb96508",
"0xed7cbfd777af468ca49aa6cac25822f3e68884e37d4973b5996beb760f9496cc",
"0x75393cf73a2ab243b28212bdda4fe7bd75a9df1eb4c9c4eed4f7b5e436861215",
"0x11fdb04a846bd1824b980b056b264e91a748d881abb085c163a0b6e65f5cc701",
"0x86c9f10260bc2ac5cd1731a217222ffc75e94139ac89d4b012588450840035b1",
"0xf500e201219893bcbddb504a350cdc121685cf953d885c7d40d838b7cabfc401",
"0x5b3dc1882a6ce992006be8652fec4a0fe33655d98e10db402b6dfbbed2e99779",
"0xa2919af9b37b46ba6dc25336942f73c968380359d9622e1c7e2d799675382609"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

