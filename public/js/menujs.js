var menu = document.querySelector('.menu-list');
var target;
var subtarget;
function getCoords(elem) {
	var box = elem.getBoundingClientRect();
	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
		bot: box.bottom + pageXOffset,
		right: box.right + pageXOffset,
	};
};
menu.onmouseover = (e)=>{
	if (e.target.matches('.menu-item')){
		target = e.target;
		var cords = getCoords(target);
		// console.log(cords.right);
		// console.log(cords.top);
		subtarget = target.firstElementChild;
		// console.log(subtarget);
		subtarget.classList.add('active');
		// console.log(cords.right + ' ' + cords.top);
		subtarget.style.left = cords.right + "px";
		subtarget.style.top = cords.top + "px";
	}
};
menu.onmouseout = (e)=>{
	var rt = e.relatedTarget;
	if (rt == null){
		return;
	};
	if (rt == target || rt.matches('.submenu-item') || rt == subtarget){
		return
	}else{
		subtarget.classList.remove('active');
	}
};
