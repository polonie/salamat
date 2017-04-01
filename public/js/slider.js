var slider = document.querySelector('.slider-block');
var currentSlide;
var len = slider.children.length;
var numb = len;
console.log(len);

setInterval(()=>{
	slider.children[numb].style.opacity = 0;
	++numb;
	numb = numb % len;
	slider.children[numb].style.opacity = 1;
}, 4000);
