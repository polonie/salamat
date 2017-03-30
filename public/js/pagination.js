var pages = document.querySelector('.pages');
var list = document.querySelector('.boutiques-block-items');
var pagesList = document.querySelectorAll('.page-item');
var indx = +list.getAttribute('data-category');
pagesList[indx].classList.add('active-page');

pages.onclick = (e)=>{
	if (e.target.matches('.page-item')){
		var pageNumb = e.target.getAttribute('data-page');
		activePage.classList.remove('active-page');
		activePage = e.target;
		activePage.classList.add('active-page');
		window.location.href = `/boutiques?pagenumber=${pageNumb}`;
		// fetch(`/boutiques?pagenumber=${pageNumb}`)
		// 	.then((response)=>{
		// 		return response.json();
		// 	})
		// 	.then((docs)=>{
		// 		console.log(docs);
		// 		while(list.firstChild){
		// 			list.removeChild(list.firstChild);
		// 		}
		// 		docs.forEach((item, indx)=>{
		// 			var boutiques_block_item = document.createElement('div');
		// 				boutiques_block_item.className = 'boutiques-block-item';
		// 			var boutiques_block_header = document.createElement('div');
		// 				boutiques_block_header.className = 'boutiques-block-header';
		// 					var boutique_name = document.createElement('h3');
		// 						boutique_name.className = 'boutique-name';
		// 						boutique_name.innerText = item.name;
		// 				boutiques_block_header.appendChild(boutique_name);
		// 			var boutiques_block_body = document.createElement('div');
		// 				boutiques_block_body.className = 'boutiques-block-body clearfix';
		// 					var boutiques_block_left = document.createElement('div');
		// 						boutiques_block_left.className = 'boutiques-block-left'
		// 							var profile_block = document.createElement('div');
		// 							profile_block.className = 'profile-block';
		// 								var profile_block_img = document.createElement('img');
		// 								profile_block_img.setAttribute('src', `./img/boutiques/${item.logo}`);
		// 								profile_block_img.className = 'profile-img';
		// 							profile_block.appendChild(profile_block_img);
		// 						boutiques_block_left.appendChild(profile_block);
		// 					var boutiques_block_right = document.createElement('div');
		// 						boutiques_block_right.className = 'boutiques-block-right';
		// 							var aboutList = document.createElement('ul');
		// 							aboutList.className = 'list';
		// 								var boutique_list_item1 = document.createElement('li');
		// 								boutique_list_item1.className = 'boutique-list-item';
		// 									var span_salamat_title = document.createElement('span');
		// 										span_salamat_title.className = 'bord';
		// 										span_salamat_title.innerText = 'Саламат: '
		// 									var span_salamat = document.createElement('span');
		// 										span_salamat.innerText = item.salamat
		// 								boutique_list_item1.appendChild(span_salamat_title);
		// 								boutique_list_item1.appendChild(span_salamat);
		// 								var boutique_list_item2 = document.createElement('li');
		// 								boutique_list_item2.className = 'boutique-list-item';
		// 									var span_salon_title = document.createElement('span');
		// 										span_salon_title.className = 'bord';
		// 										span_salon_title.innerText = 'Салон: ';
		// 									var span_salon = document.createElement('span');
		// 										span_salon.innerText = item.salon;
		// 								boutique_list_item2.appendChild(span_salon_title);
		// 								boutique_list_item2.appendChild(span_salon);
		// 								var boutique_list_item3 = document.createElement('li');
		// 								boutique_list_item3.className = 'boutique-list-item';
		// 									var span_phone_title = document.createElement('span');
		// 										span_phone_title.className = 'bord';
		// 										span_phone_title.innerText = 'Телефон: '
		// 									var span_phone = document.createElement('span');
		// 										span_phone.innerText = item.phone
		// 								boutique_list_item3.appendChild(span_phone_title);
		// 								boutique_list_item3.appendChild(span_phone);
		// 							aboutList.appendChild(boutique_list_item1);
		// 							aboutList.appendChild(boutique_list_item2);
		// 							aboutList.appendChild(boutique_list_item3);
		// 							var boutiques_description_block = document.createElement('div');
		// 							boutiques_description_block.className = 'boutiques-description-block';
		// 								var h3_title = document.createElement('h3');
		// 								h3_title.innerText = 'Описание';
		// 								var boutiques_description = document.createElement('p');
		// 								boutiques_description.className = 'boutiques-description';
		// 								boutiques_description.innerText = item.about;
		// 							boutiques_description_block.appendChild(h3_title);
		// 							boutiques_description_block.appendChild(boutiques_description);
		// 						boutiques_block_right.appendChild(aboutList);
		// 						boutiques_block_right.appendChild(boutiques_description_block);
		// 			boutiques_block_body.appendChild(boutiques_block_left);
		// 			boutiques_block_body.appendChild(boutiques_block_right);
		// 			boutiques_block_item.appendChild(boutiques_block_header);
		// 			boutiques_block_item.appendChild(boutiques_block_body);
		// 			list.appendChild(boutiques_block_item);
		// 		})
		// 	});
	};
};
