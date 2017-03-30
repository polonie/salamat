var ready = ()=>{
	var pages = document.querySelector('.pages');
	pages.onclick = (e)=>{
		if (e.target.matches('.page-item')){
			var pageNumb = e.target.getAttribute('data-page');
			window.location.href = `/boutiques?pagenumber=${pageNumb}`;
		};
	};
};
document.addEventListener("DOMContentLoaded", ready);