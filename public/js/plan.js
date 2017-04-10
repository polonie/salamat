var plan = document.querySelector('.floor');
var tooltip = document.querySelector('.tooltip-block');
var title = document.querySelector('.title');
var salamat_field = document.querySelector('.tooltip-list-item-salamat')
var boutique_field = document.querySelector('.tooltip-list-item-boutique');
var tooltip_button = document.querySelector('.tooltip-button');
var currentBoutique,_salamat,_boutique, doc;
document.onclick = (e)=>{
	if (e.target.parentElement.matches('.boutique')){
		currentBoutique = e.target.parentElement;
		_boutique = currentBoutique.getAttribute('data-boutique');
	}else{
		tooltip.classList.remove('tooltip-block-active');
		return;
	}
	_salamat = plan.getAttribute('data-salamat');
	fetch(`/getboutique?salamat=${_salamat}&boutique=${_boutique}`)
		.then((response)=>{
			return response.json();
		})
		.then((docs)=>{
			if (docs.length!=0){
				doc = docs[0];
			}else{
				doc = {name: 'нет информации', salamat: 'нет информации', salon: 'нет информации'};
			}
			tooltip.style.top = e.pageY + 'px';
			tooltip.style.left = e.pageX + 'px';
			tooltip.classList.add('tooltip-block-active');
			title.innerText = doc.name;
			salamat_field.innerText = `Саламат: ${doc.salamat}`;
			boutique_field.innerText = `Салон: ${doc.salon}`;
		});
};

tooltip_button.onclick = (e)=>{
	_boutique = currentBoutique.getAttribute('data-boutique');
	_salamat = plan.getAttribute('data-salamat');
	console.log(`${_salamat}, ${_boutique}`);
	window.location.href = `/boutiquelist?salamat=${_salamat}&boutique=${_boutique}`;
};