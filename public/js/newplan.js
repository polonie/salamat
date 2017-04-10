var hoverBlock = document.querySelector('.hover-block');
var currentImg = document.querySelector('.current-img');
var currentSm = document.querySelector('.current-sm');
var currentLink = document.querySelector('.current-link')

document.onclick = (e)=>{
	if (e.target.matches('.act-sm')){
		var element = e.target.parentElement;
		var salamat_numb = element.getAttribute('data-sm');
		var salamat_img = element.getAttribute('data-salamat');
		var salamat_link = element.getAttribute('data-smfloor');
		currentImg.src = `./img/${salamat_img}.jpg`;
		currentSm.innerHTML = `Саламат ${salamat_numb}`;
		currentLink.href=`${salamat_link}`;
		currentImg.onload = (e)=>{
			hoverBlock.style.display = 'block';
		};
	}else if(e.target.matches('.close-button')){
		hoverBlock.style.display = 'none';
	}
};