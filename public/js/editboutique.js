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
		const salamat = document.querySelector('.salamat').value;
		const salon = document.querySelector('.salon').value;
		const name = document.querySelector('.name').value;
		var newvalue = input.value;
		var field = input.getAttribute('name');
		// button.classList.add('disabled');
		fetch(`/editboutique?salamat=${salamat}&salon=${salon}&name=${name}&newvalue=${newvalue}&field=${field}`)
			.then((response)=>{
				console.log(response);
				return response.json();
			})
			.then((doc)=>{
				// button.classList.remove('disabled');
				button.innerText = 'Редактировать';
				button.classList.toggle('save-button');
				console.log(doc);
				input.blur();
				input.disabled=true;
			});
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
		button.removeChild(button.firstChild);
		button.classList.toggle('save-button');
		button.innerText = 'Редактировать';
		input = button.previousElementSibling;
		input.value = value;
		input.blur();
		input.disabled=true;
	};
};