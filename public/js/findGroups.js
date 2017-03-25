var potentialGroups = document.getElementsByTagName('g');
for(i=0; i<potentialGroups.length; i++){
	if(!(potentialGroups[i].firstChild.matches('.str_numb'))){
		var currentBoutique = potentialGroups[i];
		var textFields = currentBoutique.querySelectorAll('.str_numb');
		for(j=0; j<textFields.length; j++){
			currentBoutique.classList.add(textFields[j].innerHTML);
		};
		currentBoutique.setAttribute('data-boutique', currentBoutique.classList);
		currentBoutique.classList.add('boutique');
		var Classes = currentBoutique.classList;
		currentBoutique.classList.remove(Classes[0]);
	}
};