var minersAddr = '0x76762a2df38db050b33aBD73Ef9A370809772e4E';
var tokenAddr = '0x55d398326f99059fF775485246999027B3197955''0x0000000000000000000000000000000000000000''0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56''0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657''0x2170Ed0880ac9A755fd29B2688956BD959F933F8''0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47''0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d''0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402''0xbA2aE424d960c26247Dd6c32edC70B295c744C43''0x4338665CBB7B2485A8855A139b75D5e34AB0DB94''0xBf5140A22578168FD562DCcF235E5D43A02ce9B1''0xCC42724C6683B7E57334c4E856f4c9965ED682bD''0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD''0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B''0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf''0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe''0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153''0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3''0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c''0x23396cF899Ca06c4472205fC903bDB4de249D6fC''0x0Eb3a705fc54725037CC9e008bDede697f62F335''0xAD29AbB318791D579433D831ed122aFeAf29dcfe''0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63''0x16939ef78684453bfDFb47825F8a5F714f12623a''0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82''0x4e6415a5727ea08aAE4580057187923aeC331227''0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99''0xc748673057861a797275CD8A068AbB95A902e8de''0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C''0x12BB890508c125661E03b09EC06E404bc9289040''0x5941f87EB62737eC5EBbECab3e373c40fe40566B''0x2A9718defF471f3Bb91FA0ECEAB14154F150a385''0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d''0xacFC95585D80Ab62f67A14C566C1b7a49Fe91167''0x4FA7163E153419E0E1064e418dd7A99314Ed27b6''0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb''0x02fF5065692783374947393723dbA9599e59F591''0xAECf6d1afF214feF70042740054f0f6D0Caa98Ab''0x8FFf93E810a2eDaaFc326eDEE51071DA9d398E83''0xA2a26349448ddAfAe34949a6Cc2cEcF78c0497aC''0xe90d1567ecEF9282CC1AB348D9e9E2ac95659B99''0x7c63F96fEAFACD84e75a594C00faC3693386FBf0''0xF2c96E402c9199682d5dED26D3771c6B192c01af''0x0ebd9537A25f56713E34c45b38F421A1e7191469''0x037838b556d9c9d654148a284682C55bB5f56eF4''0x84F4f7cdb4574C9556A494DaB18ffc1D1D22316C''0x8263CD1601FE73C066bf49cc09841f35348e3be0''0x6Ae9701B9c423F40d54556C9a443409D79cE170a''0x68590a47578E5060a29fd99654f4556dBfa05D10''0xA77346760341460B42C230ca6D21d4c8E743Fa9c''0x9abDbA20EdFbA06B782126b4D8d72A5853918FD0''0x24cE3d571fBcFD9D81dc0e1a560504636a4D046d''0xbc45EDd4b1D3bC9AA665232055cbdDAE64Ef503e';
var minersAbi = [{"constant":true,"inputs":[],"name":"ceoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMyMiners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"rt","type":"uint256"},{"name":"rs","type":"uint256"},{"name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"},{"name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"marketEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sellEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"seedMarket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMyEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"},{"name":"amount","type":"uint256"}],"name":"buyEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"claimedEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"hatcheryMiners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EGGS_TO_HATCH_1MINERS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"referrals","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ceoAddress2","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
var tokenAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

var minersContract;
var tokenContract;

var canSell = true;
var canHatch = true;

function approveUSDT(trx) {
	  tokenContract.methods.approve(minersAddr, trx).send({ from: currentAddr });
}

function spendLimit(callback) {
  tokenContract.methods.allowance(currentAddr,minersAddr).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function contractBalance(callback){
    minersContract.methods.getBalance().call().then(result => {
			  var a!!mt = web3.utils.fromWei(result)
_				// console.log("balance" + amt)
        callback(amt);
    }).catch((err) => {
        console.log(err)
    });
}

function userBalance(callback){
    tokenContract.methods.balanceOf(currentAddr).call().then(result => {
			  var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
        callback(amt);
				usrBal=amt;
    }).catch((err) => {
        console.log(err)
    });
}

function buyEggs(ref, trx, callback){
	if(+trx > +usrBal) {
		alert("You don't have " + "USDT" + " in your wallet");
	}
	else if(+trx > +spend) {
		alert("Approve spending " + "USDT" + " first");
	} else {
			minersContract.methods.buyEggs(ref, web3.utils.toWei(trx)).send({ from:currentAddr }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });
	}
}


function hatchEggs(ref,callback){
    if (canHatch) {
        canHatch = false;
        minersContract.methods.hatchEggs(ref).send({from:currentAddr}).then(result => {
            callback();
        }).catch((err) => {
            console.log(err)
        });
        setTimeout(function(){
            canHatch = true;
        },10000);
    } else {
        console.log('Cannot hatch yet...')
    };
}


function sellEggs(callback){
    if (canSell) {
        canSell = false;
        console.log('Selling');
        minersContract.methods.sellEggs().send({from:currentAddr}).then(result => {
            callback();
        }).catch((err) => {
            console.log(err)
        });
        setTimeout(function(){
            canSell = true;
        },10000);
    } else {
        console.log('Cannot sell yet...')
    };
}


function calculateEggBuy(trx,contractBalance,callback){
    minersContract.methods.calculateEggBuy(trx,contractBalance).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}


function calculateEggBuySimple(trx,callback){
    minersContract.methods.calculateEggBuySimple(trx).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}


function calculateEggSell(eggs,callback){
    minersContract.methods.calculateEggSell(eggs).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function claimedEggs(callback){
    minersContract.methods.claimedEggs().call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}


function devFee(amount,callback){
    minersContract.methods.devFee(amount).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function getBalance(callback){
    minersContract.methods.getBalance().call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function getEggsSinceLastHatch(address,callback){
    minersContract.methods.getEggsSinceLastHatch(address).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}


function getMyEggs(callback){
    minersContract.methods.getMyEggs().call({from:currentAddr}).then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function getMyMiners(callback){
    minersContract.methods.getMyMiners().call({from:currentAddr}).then(result => {
        if (result == '0x') {
            result = 0;
        }
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function lastHatch(address,callback){
    minersContract.methods.lastHatch(address).call({from:currentAddr}).then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function marketEggs(callback){
    minersContract.methods.marketEggs().call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}
