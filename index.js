const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const {
    SigningStargateClient,
} = require("@cosmjs/stargate");


/**
 * WHITELISTED_MNEMONIC
 * anger sound wisdom mind swarm tip cruel come wife couple flame sadness mule kid impose silly strong fall this dance fancy rate junk slot
 * 
 * address: cosmos1rwx8elcs93epaqd3ka66qycszwpmsmlv8s0ctw
 */

/**
 * NOT WHITELISTED MNEMONIC
 * flag gospel wrap trap body fresh bacon spider scan half return people comfort ladder trap fragile skull palace method cupboard auction shrug slam elite
 * 
 * address: cosmos1dgm29huv8unqxnngm6hrwsmuy5w0qgpa4pz4fk
 */
const mnemonic =
    "belt leaf badge release future pizza caught gap roast decorate remind exercise over crisp calm dynamic wave uphold aunt until depend arctic agent million";

const rpcEndpoint = "http://65.109.38.98:26657/";
const recipient = "cosmos1ap72s0amtult432gh6nh5ad8jh9hf7sz60pn60";
const hello = async () => {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
    const [firstAccount] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(
        rpcEndpoint,
        wallet
    );
    console.log({ client });
    const amount = {
        denom: "uSpecter",
        amount: "500",
    };

    const fee = {
        amount: [
            {
                denom: "uSpecter",
                amount: "2000",
            },
        ],
        gas: "180000", // 180k
    };
    const result = await client.sendTokens(
        firstAccount.address,
        recipient,
        [amount],
        fee
    );
    assertIsBroadcastTxSuccess(result);
}

hello()

