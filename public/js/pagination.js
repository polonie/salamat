var ready = ()=>{
	var pages = document.querySelector('.pages');
	var list = document.querySelector('.boutiques-block-items');
	var pagesList = document.querySelectorAll('.page-item');
	var indx = +(list.getAttribute('data-category')) - 1;
	pagesList[indx].classList.add('active-page');

	pages.onclick = (e)=>{
		if (e.target.matches('.page-item')){
			var pageNumb = e.target.getAttribute('data-page');
			window.location.href = `/boutiques?pagenumber=${pageNumb}`;

		};
	};
};


document.addEventListener("DOMContentLoaded", ready);