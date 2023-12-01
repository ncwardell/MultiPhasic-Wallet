const { PhantasmaTS } = require("phantasma-ts");
const Wallet = require('ethereumjs-wallet');



async function GenerateNewWallet(){

    newKey = new PhantasmaTS.PhantasmaKeys.generate()

    let walletData = {
        "WIF": newKey.toWIF(),
        "PublicKey": {
            "Phantasma": newKey.toString(),
            "EVM": Wallet.default.fromPrivateKey(Buffer.from(PhantasmaTS.getPrivateKeyFromWif(newKey.toWIF()), 'hex')).getAddressString()
        },
        "PrivateKey": PhantasmaTS.getPrivateKeyFromWif(newKey.toWIF())
    };
    return walletData;
}


async function LoadWallet(privateKey){
    
    let walletData = {
        "WIF": PhantasmaTS.getWifFromPrivateKey(privateKey),
        "PublicKey": {
            "Phantasma": PhantasmaTS.getAddressFromWif(PhantasmaTS.getWifFromPrivateKey(privateKey)),
            "EVM": Wallet.default.fromPrivateKey(Buffer.from(privateKey, 'hex')).getAddressString()
        },
        "PrivateKey": privateKey
    };

    return walletData;
}


