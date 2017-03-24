var potentialGroups = document.getElementsByTagName('g');
for(i=0; i<potentialGroups.length; i++){
	if(!(potentialGroups[i].firstChild.matches('.st5'))){
		var currentBoutique = potentialGroups[i];
		currentBoutique.classList.add('boutique');
		currentBoutique.setAttribute('data-boutique', currentBoutique.querySelector('.st5').innerText);
	}
};