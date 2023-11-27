const { PhantasmaTS } = require("phantasma-ts");
const Wallet = require('ethereumjs-wallet');



GenerateNewWallet();

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
    console.log(walletData)

}




