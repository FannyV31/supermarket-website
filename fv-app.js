
document.getElementById('cereal').addEventListener('click', cereal.showImages)
document.getElementById('candy').addEventListener('click', candy.showImages)
document.getElementById('juice').addEventListener('click', juice.showImages)



candy.addEventListener('click', candy.showImages);
cereal.addEventListener('click', cereal.showImages);
juice.addEventListener('click', juice.showImages);


document.querySelector('img').setAttribute('src', './images/candy/kit-kat.jpg' + this.name + '.jpg');

<img id="candy" src="./fv-app.js" style="display:none;"/>
document.getElementById(#candy).style.display='block';

var candy.showImages = [
  {
		img: './images/candy/kit-kat.jpg',
		name: 'Kit Kat'
	},
	{
		img: './images/candy/m&ms.jpg',
		name: 'M&M\'s'
	},
	{
		img: './images/candy/skittles.jpg',
		name: 'Skittles'
	},
	{
		img: './images/candy/snickers.jpg',
		name: 'Snickers'
	},
	{
		img: './images/candy/twix.jpg',
		name: 'Twix'
	}
];


var cereal.showImages = [
	{
		img: './images/cereal/cheerios.jpg',
		name: 'Cheerios'
	},
	{
		img: './images/cereal/crunch.jpg',
		name: 'Crunch'
	},
	{
		img: './images/cereal/fruit-loops.jpg',
		name: 'Fruit Loops'
	},
	{
		img: './images/cereal/puffs.jpg',
		name: 'Puffs'
	},
	{
		img: './images/cereal/raisin-bran.jpg',
		name: 'Raisin Bran'
	}
];

var juice.showImages = [
	{
		img: './images/juice/apple-juice.jpg',
		name: 'Apple Juice'
	},
	{
		img: './images/juice/carrot-juice.jpg',
		name: 'Carrot Juice'
	},
	{
		img: './images/juice/grape-juice.jpeg',
		name: 'Grape Juice'
	},
	{
		img: './images/juice/Orange-juice.jpg',
		name: 'Orange Juice'
	},
	{
		img: './images/juice/tomato-juice.jpg',
		name: 'Tomato Juice'
	}
];

var shoppingCart = []

$('#cereal').click(function() {
	addShoppingItems('cereal');
});
