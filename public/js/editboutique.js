const form = document.querySelector('.results-form');
var value;

form.onfocus = function(e) {
	if (e.target.matches('.results-field-input')){
		const input = e.target;
		input.value = input.value;
		return;
	}
};
form.onclick = function(e) {
	var button = e.target;
	var input = button.previousElementSibling;
	if(button.classList.contains('save-button')){
		button.innerText = 'Редактировать';
		button.classList.toggle('save-button');
		input.blur();
		input.disabled=true;
	}else if(button.matches('.edit-button')){
		button.classList.toggle('save-button')
		button.innerText='Сохранить';
		const cancel = document.createElement('div');
		cancel.classList.add('cancel-button');
		cancel.innerText = 'Отменить';
		button.appendChild(cancel);
		input.disabled = false;
		input.focus();
		value = input.value;
		input.value = value;
	}else if(button.matches('.cancel-button')){
		button = button.parentElement;
		button.removeChild(this.children[0]);
		input = button.previousElementSibling;
		input.value = value;
	};
};