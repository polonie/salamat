var hoverBlock = document.querySelector('.hover-block');
var currentImg = document.querySelector('.current-img');
var currentSm = document.querySelector('.current-sm');

document.onclick = (e)=>{
	if (e.target.matches('.rect')){
		hoverBlock.style.display = 'block';
		var salamat_numb = e.target.parentElement.getAttribute('data-sm');
		var salamat_img = e.target.parentElement.getAttribute('data-salamat');
		currentImg.src = `./img/${salamat_img}.jpg`;
		currentSm.innerHTML = `Саламат ${salamat_numb}`;
	};
};