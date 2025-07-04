var Undefine = {
    "id": "UndefineId",
    "title": "Undefine",
    "contexts": ['selection']
};

var AddressMenu = {
    "id": "AddressMenuId",
    "title": "Address",
    "contexts": ['selection']
};
var Account = {
	"id": "AccountId",
	"parentId": "AddressMenuId",
	"title": "Account",
	"contexts": ['selection']
};
var AccountETH = {
	"id": "AccountETHId",
	"parentId": "AccountId",
	"title": "ETH",
	"contexts": ['selection']
};
var AccountSOL = {
	"id": "AccountSOlId",
	"parentId": "AccountId",
	"title": "SOL",
	"contexts": ['selection']
};
var Anonymity = {
	"id": "AnonymityId",
	"parentId": "AddressMenuId",
	"title": "Anonymity",
	"contexts": ['selection']
};
var Token = {
	"id": "TokenId",
	"parentId": "AddressMenuId",
    "title": "Token",
    "contexts": ['selection']
};
var TokenCommon = {
	"id": "TokenCommonId",
	"parentId": "TokenId",
    "title": "Token common",
    "contexts": ['selection']
};
var TokenETH = {
	"id": "TokenETHId",
	"parentId": "TokenId",
    "title": "ETH",
    "contexts": ['selection']
};
var TokenSOL = {
	"id": "TokenSOLId",
	"parentId": "TokenId",
    "title": "SOL",
    "contexts": ['selection']
};

var Transaction = {
    "id": "TransactionId",
    "title": "Transaction",
    "contexts": ['selection']
};


chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create(Undefine)
	
	chrome.contextMenus.create(AddressMenu)
	chrome.contextMenus.create(Account)
	chrome.contextMenus.create(AccountETH)
	chrome.contextMenus.create(AccountSOL)
    chrome.contextMenus.create(Anonymity)
	chrome.contextMenus.create(Token)
	chrome.contextMenus.create(TokenCommon)
	chrome.contextMenus.create(TokenETH)
	chrome.contextMenus.create(TokenSOL)
	
	chrome.contextMenus.create(Transaction)
});


chrome.contextMenus.onClicked.addListener(function(contextClick) {
	if (contextClick.selectionText) {
		if (contextClick.menuItemId == "UndefineId") {
			chrome.tabs.create({url:`https://www.google.com/search?q=intext:"${contextClick.selectionText}"`});
		}
		else if (contextClick.menuItemId == "AccountETHId") {
			chrome.tabs.create({url:`https://debank.com/profile/${contextClick.selectionText}`});
		}
		else if (contextClick.menuItemId == "AccountSOLId") {
			chrome.tabs.create({url:`https://jup.ag/portfolio/${contextClick.selectionText}`});
			chrome.tabs.create({url:`https://app.step.finance/portfolio?wallet=${contextClick.selectionText}`});
		}
		else if (contextClick.menuItemId == "AnonymityId") {
			chrome.tabs.create({url:`https://tutela.xyz/cluster?address=${contextClick.selectionText}`});
		}
		else if (contextClick.menuItemId == "TokenCommonId") {
			chrome.tabs.create({url:`https://tokensniffer.com/token/${contextClick.selectionText}`});
			chrome.tabs.create({url:`https://www.breadcrumbs.app/reports/${contextClick.selectionText}`});
		}
		else if (contextClick.menuItemId == "TokenETHId") {
			chrome.tabs.create({url:`https://de.fi/scanner/contract/${contextClick.selectionText}?chainId=eth`});
			chrome.tabs.create({url:`https://app.bubblemaps.io/eth/token/${contextClick.selectionText}`});
		}
		else if (contextClick.menuItemId == "TokenSOLId") {
			chrome.tabs.create({url:`https://de.fi/scanner/contract/${contextClick.selectionText}?chainId=sol`});
			chrome.tabs.create({url:`https://app.bubblemaps.io/sol/token/${contextClick.selectionText}`});
		}
		else if (contextClick.menuItemId == "TransactionId") {
			chrome.tabs.create({url:`https://phalcon.blocksec.com/tx/eth/${contextClick.selectionText}`});
			chrome.tabs.create({url:`https://dashboard.tenderly.co/tx/mainnet/${contextClick.selectionText}`});
		}
	}
});	
