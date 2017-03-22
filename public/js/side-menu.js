var menu = document.querySelector('.menu-list');
menu.onclick = (e)=>{
	var item = e.target;
	if (item.getAttribute('data-id')){
		window.location.href = `/category?dataid=${item.getAttribute('data-id')}`;
	};
};