document.addEventListener('DOMContentLoaded', function() {


	function BTCtoUSD(){
		chrome.tabs.executeScript(null, {
			code: "var a = (new Number(window.getSelection())) + 0; a;"
		}, function(selection){
			if(typeof selection[0] === 'number'){
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "https://blockchain.info/ticker", false)
				xhr.send();

				alert(JSON.parse(xhr.response).USD['15m'] * selection)
			}else{
				alert("please select a number and only a number - no letters or symbols.")
			}
		})
		
	}

	var title = "Convert BTC to USD";
	var id = chrome.contextMenus.create({"title": title, "contexts":["selection"], "onclick": BTCtoUSD});


}, false);