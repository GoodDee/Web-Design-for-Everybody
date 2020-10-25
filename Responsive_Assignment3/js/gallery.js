
function upDate(pic){
	var x = document.getElementById("desc");
	var y = document.getElementById("image");
	y.src = pic.src;
	x.innerHTML = pic.alt;
}