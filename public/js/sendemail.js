var button = document.querySelector('.page-button');
var form_input_name = document.querySelector('.form-input-name');
var form_input_email = document.querySelector('.form-input-email');
var form_textarea = document.querySelector('.form-textarea');
var form_message = document.querySelector('.form-message');
form_message.style.opacity = '0';


button.addEventListener('click', sendMyEmail);

const sendMyEmail = (e)=>{
	var val1 = form_input_name.value;
	var val2 = form_input_email.value;
	var val3 = form_textarea.value;
	if (val1 && val2 && val3){
		button.removeEventListener('click', sendMyEmail);
		button.classList.add('inactive-button');
		form_message.classList.remove('form-message-error');
		form_message.classList.add('form-message-success');
		emailjs.send("mail_ru","template_4cwfGNrw", {name: val1, email: val2, text: val3})
		.then(function(response) {
			button.addEventListener('click', sendMyEmail);
			button.classList.remove('inactive-button');
			form_message.innerText = 'Спасибо, ваши данные отправлены!'
			form_message.classList.remove('form-message-error');
			form_message.classList.add('form-message-success');
			form_message.style.opacity = '1';
			// form_message.innerText = '';
			setTimeout(()=>{
				form_message.style.opacity = '0';
			}, 1100);
			console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
		}, function(err) {
			console.log("FAILED. error=", err);
		});
	}else{
		console.log('Has not been sent');
		form_message.classList.remove('form-message-success');
		form_message.classList.add('form-message-error');
		form_message.style.opacity = '1';
		form_message.innerText = 'Пожалуйста, заполните все поля.';
		setTimeout(()=>{
			form_message.style.opacity = '0';
		}, 1100);
	};
};