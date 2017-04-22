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
		const edit = e.target;
		edit.previousElementSibling.disabled = false;
		edit.previousElementSibling.focus();
		return;
	}
};