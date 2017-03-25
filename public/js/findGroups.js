var potentialGroups = document.getElementsByTagName('g');
for(i=0; i<potentialGroups.length; i++){
	if(!(potentialGroups[i].firstChild.matches('.st5'))){
		var currentBoutique = potentialGroups[i];
		var textFields = currentBoutique.querySelectorAll('.st5');
		for(j=0; j<textFields.length; j++){
			currentBoutique.classList.add(textFields[j].innerHTML);
		};
		currentBoutique.setAttribute('data-boutique', currentBoutique.classList);
		currentBoutique.classList.add('boutique');
		var firstClass = currentBoutique.classList.split(' ').[0];
		currentBoutique.classList.remove('firstClass');
	}
};