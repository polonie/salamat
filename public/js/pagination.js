var ready = ()=>{
	var pages = document.querySelector('.pages');
	var dataID = pages.getAttribute('data-id');
	var data_pages = pages.getAttribute('data-pages');
	pages.onclick = (e)=>{
		if (e.target.matches('.page-item')){
			var pageNumb = e.target.getAttribute('data-page');
			window.location.href = `/boutiques?pagenumber=${pageNumb}&categoryID=${dataID}&pages=${data_pages}`;
		};
	};
};
document.addEventListener("DOMContentLoaded", ready);