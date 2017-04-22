var form = document.querySelector('.results-form');


form.onfocus = function(e) {
	if (e.target.matches('.results-field-input')){
		const input = e.target;
		input.value = input.value;
		return;
	}
};
form.onclick = function(e) {
	if (e.target.matches('.edit-button')){
		const button = e.target
		const input = button.previousElementSibling;
		button.classList.add('cancel-button');
		console.log(button.classList);
		input.disabled = false;
		input.focus();
		input.value = input.value;

	}
};