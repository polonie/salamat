const inputSearch = document.querySelector('.input-search');
var searchedResults = document.querySelector('.search-box-results');
var buttonSearch = document.querySelector('.button-search');
var findList;
var arr;



buttonSearch.onclick = (e)=>{
	if (inputSearch.getAttribute('data-id')){
		window.location.href = `/category?dataid=${inputSearch.getAttribute('data-id')}`;
	}else{
		return;
	}
};

inputSearch.onfocus = (e)=>{
	if (e.target.classList.contains('data-on')){
		return
	}else{
		e.target.classList.add('data-on');
		fetch('/search')
			.then((response)=>{
				return response.json();
			})
			.then((docs)=>{
				arr = docs;
			});
	};
};

inputSearch.onkeyup = (e)=>{
	searchedResults.classList.remove('active');
	if (searchedResults.hasChildNodes()){
		findList.remove();
	};
	findList = document.createElement('ul');
	findList.classList.add('list');
	searchedResults.appendChild(findList);
	const len = e.target.value.length
	if (len !== 0){
		var newarr = arr.filter((i)=>{
			if (i.name.substr(0, len) === e.target.value){
				searchedResults.classList.add('active');
				var itemFind = document.createElement('li')
				itemFind.className ='find-item';
				itemFind.setAttribute('data-id', i.id);
				itemFind.innerHTML = i.name;
				findList.appendChild(itemFind);
				// itemFind.onclick = (e)=>{
				// 	inputSearch.value = e.target.innerHTML;
				// 	inputSearch.setAttribute('data-id', i.id);
				// 	searchedResults.classList.remove('active');
				// }
			}else{
				return;
			}
		});
	}else{
		searchedResults.classList.remove('active');
	};
};

searchedResults.onclick = (e)=>{
	if (e.target.matches('.find-item')){
		window.location.href = `/category?dataid=${e.target.getAttribute('data-id')}`;
	}
};



document.onclick = (e)=>{
	if (e.target !== inputSearch){
		searchedResults.classList.remove('active');
	};
};