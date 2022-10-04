let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer


async function connectMetamask(){
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    console.log("Account adress:", await signer.getAdress());
}


async function getBalance(){
    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("account's balance in ether:", balance.toString() / convertToEth );

}