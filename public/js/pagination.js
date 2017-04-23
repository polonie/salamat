var ready = ()=>{
	var pages = document.querySelector('.pages');
	var dataID = pages.getAttribute('data-id')
	pages.onclick = (e)=>{
		if (e.target.matches('.page-item')){
			var pageNumb = e.target.getAttribute('data-page');
			window.location.href = `/boutiques?pagenumber=${pageNumb}&categoryID=${dataID}`;
		};
	};
};
document.addEventListener("DOMContentLoaded", ready);