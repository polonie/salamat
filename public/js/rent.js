var ch = document.querySelector('.rent-photos__miniature');
var currentImg = document.querySelector('.current-img');

ch.onclick = (e)=>{
	if (e.target.matches('.miniature-pic-block') || e.target.matches('.miniature-pic-block__img')){
		console.log(e.target);
		switch(e.target){
			case document.querySelector('.rent1'):
				currentImg.src="./img/rent/rent1.jpg";
				break;
			case document.querySelector('.rent2'):
				currentImg.src="./img/rent/rent2.jpg";
				break;
			case document.querySelector('.rent3'):
				currentImg.src="./img/rent/rent3.jpg";
				break;
			case document.querySelector('.rent4'):
				currentImg.src="./img/rent/rent4.jpg";
				break;
			case document.querySelector('.rent5'):
				currentImg.src="./img/rent/rent5.jpg";
				break;
		};
	}else{
		console.log(e.target);
	}
	return;
};