var hoverBlock = document.querySelector('.hover-block');
var currentImg = document.querySelector('.current-img');
var currentSm = document.querySelector('.current-sm');

document.onclick = (e)=>{
	if (e.target.matches('.salamat')){
		hoverBlock.style.display = 'block';
		var salamat_numb = e.target.getAttribute('data-sm');
		var salamat_img = e.target.getAttribute('data-salamat');
		currentImg.src = `./img/${salamat_img}.jpg`;
		currentSm.innerHTML = `Саламат ${salamat_numb}`;
	};
};