function removeOnMouseDown() {
	var all = document.querySelectorAll("a");
	for (var i = 0; i < all.length; i ++)
	{
		all[i].setAttribute("onmousedown", "");
	}
}
setTimeout("removeOnMouseDown()", 1000);