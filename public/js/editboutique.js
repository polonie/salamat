var form = document.querySelector('.results-form');



form.onclick = function(e) {
	console.log(this);
	if (e.target.matches('.edit-button')){
		const edit = e.target;
		edit.previousElementSibling.disabled = false;
		edit.previousElementSibling.focus();
	}
};