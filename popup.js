document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('button');
	var container = document.getElementById('container');
	var imagesArray = [];
	
	for(var i = 1; i <= 5; i++) {
		imagesArray.push('cat' + i + '.jpg')
	}

	button.addEventListener('click', function() {
		var num = Math.floor(Math.random() * (imagesArray.length));
		document.catImage.src = imagesArray[num];
	}, false);
}, false);