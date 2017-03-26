var ready = ()=>{
	var boutiqueCollection = document.querySelector('.boutiques-block-items');
	boutiqueCollection.onclick = (e)=>{
		var item = e.target;
		while(!item.matches('.boutique-show')){
			item = item.parentElement;
		};
		if (item.matches('.boutique-show')){
			var data_salamat = item.getAttribute('data-salamat');
			var data_salon = item.getAttribute('data-salon');
			if (data_salon && data_salamat){
				window.location.href = `/findboutique?data_salamat=${data_salamat}&data_salon=${data_salon}`;
			};
		}else{
			return;
		}
	};
}

document.addEventListener("DOMContentLoaded", ready)

