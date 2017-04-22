const search_button = document.querySelector('.search-button');
const salamat = document.getElementById('salamat');
const salon = document.getElementById('salon');
const message = document.querySelector('.returned-message');


search_button.onclick = function(e) {
	console.log('salem');
	if (salamat.value && salon.value){
		window.location.href = `/findboutique?salamat=${salamat.value}&salon=${salon.value}`;
	}else{
		message.innerText = 'Пожалуста, заполните все поля';
	}
}