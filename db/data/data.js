const checkLink = {home: true, rent: true, newplan: true, company: true, contacts: true};
const links = [{link: 'home', linktitle: 'Главная'}, {link: 'articles', linktitle: 'Новости'}, {link: 'rent', linktitle: 'Аренда'}, {link: 'newplan', linktitle: 
'План'}, {link: 'company', linktitle: 'О нас'}, {link: 'contacts', linktitle: 'Контакты'}];
const floors = [
		{
			tcname: 'Саламат 1',
			floors: [
				{floor: '1 этаж', link: 'salamat1-1'},
				{floor: '2 этаж', link: 'salamat1-2'},
				{floor: '3 этаж', link: 'salamat1-3'},
				{floor: '4 этаж', link: 'salamat1-4'}
			]
		},
		{
			tcname: 'Саламат 2',
			floors: [
				{floor: '1 этаж', link: 'salamat2-1'},
				{floor: '2 этаж', link: 'salamat2-2'}
			]
		},
		{
			tcname: 'Саламат 3',
			floors: [
				{floor: '0 этаж', link: 'salamat3-0'},
				{floor: '1 этаж', link: 'salamat3-1'},
				{floor: '2 этаж', link: 'salamat3-2'},
				{floor: '3 этаж', link: 'salamat3-3'}
			]
		},
		{
			tcname: 'Саламат 4',
			floors: [
				{floor: '1 этаж', link: 'salamat4-1'},
				{floor: '2 этаж', link: 'salamat4-2'}
			]
		},
		{
			tcname: 'Саламат 5',
			floors: [
				{floor: '0 этаж', link: 'salamat5-0'},
				{floor: '1 этаж', link: 'salamat5-1'},
				{floor: '2 этаж', link: 'salamat5-2'},
				{floor: '3 этаж', link: 'salamat5-3'}
			]
		}
];
const categories = {
	pop_categories: [
		{link:'category1.jpg', name:'Строительные материалы'},
		{link:'category2.jpg', name:'Отделочные материалы'},
		{link:'category3.jpg', name:'Лакокрасочные материалы'},
		{link:'category4.jpg', name:'Сантехника'},
		{link:'category5.jpg', name:'Иснтрументы'},
		{link:'category6.jpg', name:'Все для дома'}
	],
	bath_category: [
		{link:'bath1.jpg', name: 'Унитазы/Биде'},
		{link:'bath2.jpg', name: 'Душевые кабины'},
		{link:'bath3.jpg', name: 'Раковины'},
		{link:'bath4.jpg', name: 'Ванны'}
	],
	furniture_category: [
		{link:'furniture1.jpg', name: 'Гостинная'},
		{link:'furniture2.jpg', name: 'Кухня'},
		{link:'furniture3.jpg', name: 'Спальня'},
		{link:'furniture4.jpg', name: 'Ванна'}
	],
	paint_category:[
		{link:'paint1.jpg', name: 'Внутренняя покраска'},
		{link:'paint2.jpg', name: 'Внешняя покраска'}
	]
};
const footer = [
		{title:'О нас', links:[{title:'О компании', link:'company'}, {title:'Аренда', link: 'rent'}, {title:'Наши контакты', link:'contacts'}]},
		{title:'План этажей', links:[{title:'Саламат 1', link:'salamat1-1'}, {title:'Саламат 2', link:'salamat2-1'}, {title:'Саламат 3', link:'salamat3-0'}, {title:'Саламат 4', link:'salamat4-1'}, {title:'Саламат 5', link:'salamat5-0'}]},
		{title:'Производители', links:[{title:'Итальянские', link:false}, {title:'Китайские', link:false}, {title:'Другие', link:false}]},
		{title:'Обратная связь', links:[{title:'Клиентам', link: 'contacts'}, {title:'Арендаторам', link: 'contacts'}, {title:'Партнерам', link: 'contacts'}]},
		{title:'Подписка'}
]

module.exports = {checkLink, links, floors, categories, footer};