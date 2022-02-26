require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note six pumpkin harvest farm equal gasp'; 
let testAccounts = [
"0xd9453d7989a4bbc62457752cb28bb7e1546ee88adefa83b2403f4297ead1d30b",
"0x96c57c84addba5c1a3242e534fe5915140cbeb3dc9da0e5637c087ac48211ced",
"0xbc7ff14e23e8042a54a5d4b4076b72af84de53d5bf8351950177727663b2fb31",
"0x7c908d12575387c5c552e7cb1bb62096ec9e2757ceb50c4f5ce11e9227882ee7",
"0xb1c465bccd27823ab0e7aaa7935d648aa5ef6139a464aedbd0911fbc46769005",
"0x9c1fd111de9a9eaa893f9165b8fbef3fd12886e6079b4462c0dfe170e856c618",
"0x66675ef4297758cbd06589fde93a9006b87953a8fe4bc0514bc50e08490b8bfd",
"0x157b076abbeaefa6115a774775235884435567e36a0a3d5af21daaedb9e0236c",
"0x4114d6defa9c777d21104a6df949d0d1689ad7362991991b52a167076e2f8d20",
"0xbd7b9ab867b33be54d60f4a86b02bc1a4b91506c071586abdc459a0826c9a11e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

