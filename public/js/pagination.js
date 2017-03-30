var ready = ()=>{
	var pages = document.querySelector('.pages');
	var list = document.querySelector('.boutiques-block-items');
	var indx = +(list.getAttribute('data-category')) - 1;
	pages.children[indx].classList.add('active-page');

	pages.onclick = (e)=>{
		if (e.target.matches('.page-item')){
			var pageNumb = e.target.getAttribute('data-page');
			window.location.href = `/boutiques?pagenumber=${pageNumb}`;
		};
	};
};


document.addEventListener("DOMContentLoaded", ready);