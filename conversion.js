document.addEventListener('DOMContentLoaded', function() {


	function BTCtoUSD(){
		chrome.tabs.executeScript({
			code: "console.log(window.getSelection() + 'stuff')"
		})
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://blockchain.info/ticker", false)
		xhr.send();

		console.log(JSON.parse(xhr.response).USD['15m'])
	}

	var title = "Convert BTC to USD";
	var id = chrome.contextMenus.create({"title": title, "contexts":["selection"], "onclick": BTCtoUSD});


}, false);