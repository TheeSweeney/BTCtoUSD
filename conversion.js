document.addEventListener('DOMContentLoaded', function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://blockchain.info/ticker", false)

	function BTCtoUSD(){
		xhr.send();
		console.log(xhr)
	}

	var title = "Convert BTC to USD";
	var id = chrome.contextMenus.create({"title": title, "contexts":["selection"], "onclick": BTCtoUSD});


}, false);