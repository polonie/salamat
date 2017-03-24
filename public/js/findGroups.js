var potentialGroups = document.getElementsByTagName('g');
for(i=0; i<potentialGroups.length; i++){
	if(!(potentialGroups[i].firstChild.matches('.st5'))){
		var currentBoutique = potentialGroups[i];
		currentBoutique.classList.add('boutique');
		var text = currentBoutique.querySelector('.st5').innerHTML;
		currentBoutique.setAttribute('data-boutique', text);
	}
};