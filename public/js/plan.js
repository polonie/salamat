var plan = document.querySelector('.floor');
var tooltip = document.querySelector('.tooltip-block');
var title = document.querySelector('.title');
var salamat_field = document.querySelector('.tooltip-list-item-salamat')
var boutique_field = document.querySelector('.tooltip-list-item-boutique');
var tooltip_button = document.querySelector('.tooltip-button');
var currentBoutique,_salamat,_boutique;
document.onclick = (e)=>{
	if (e.target.matches('.st4')){
		currentBoutique = e.target.parentElement;
		_boutique = currentBoutique.getAttribute('data-boutique').substr(1);
		_salamat = plan.getAttribute('data-salamat');
		console.log(`${_salamat}, ${_boutique}`);
		fetch(`/getboutique?salamat=${_salamat}&boutique=${_boutique}`)
			.then((response)=>{
				return response.json();
			})
			.then((docs)=>{
				console.log(docs);
				var doc = docs[0];
				tooltip.style.top = e.pageY + 'px';
				tooltip.style.left = e.pageX + 'px';
				tooltip.classList.add('tooltip-block-active');
				title.innerText = doc.name;
				salamat_field.innerText = `Саламат: ${doc.salamat}`;
				boutique_field.innerText = `Салон: ${doc.salon}`;
			});


	}else{
		tooltip.classList.remove('tooltip-block-active');
	};
};

tooltip_button.onclick = (e)=>{
	_boutique = currentBoutique.getAttribute('id').substr(1);
	_salamat = plan.getAttribute('data-salamat');
	console.log(`${_salamat}, ${_boutique}`);
	window.location.href = `/boutique?salamat=${_salamat}&boutique=${_boutique}`;
};