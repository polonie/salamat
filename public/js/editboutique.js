var form = document.querySelector('.results-form');


form.onfocus = function(e) {
	if (e.target.matches('.results-field-input')){
		const input = e.target;
		input.value = input.value;
		return;
	}
};
form.onclick = function(e) {
	const button = e.target;
	const input = button.previousElementSibling;
	if(button.classList.contains('save-button')){
		button.innerText = 'Редактировать';
		button.classList.toggle('save-button');
		input.blur();
		input.disabled=true;
	}else if(e.target.matches('.edit-button')){
		button.classList.toggle('save-button');
		input.disabled = false;
		input.focus();
		input.value = input.value;
	}
};