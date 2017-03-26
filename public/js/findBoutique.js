var ready = ()=>{
	var boutiqueShow = document.querySelector('.boutique-show');
	boutiqueShow.onclick = (e)=>{
		var item = e.target;
		console.log('salem');
		while(item != boutiqueShow){
			item = item.parentElement;
		};
		console.log(item);
		var data_salamat = item.getAttribute('data-salamat');
		var data_salon = item.getAttribute('data-salon');
		if (data_salon && data_salamat){
			window.location.href = `/findboutique?data_salamat=${data_salamat}&data_salon=${data_salon}`;
		}else{
			console.log(data_salon);
		}
	};
}

document.addEventListener("DOMContentLoaded", ready)

