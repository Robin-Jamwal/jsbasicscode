function SwappingMoney(wallet1,wallet2){
    wallet1=wallet1+wallet2;
    wallet2=wallet1-wallet2;
    wallet1=wallet1-wallet2;
    console.log(`After swapping the money the original money ahmed had ${wallet1} and the ali had ${wallet2}`)
}

SwappingMoney(2000,4000)        