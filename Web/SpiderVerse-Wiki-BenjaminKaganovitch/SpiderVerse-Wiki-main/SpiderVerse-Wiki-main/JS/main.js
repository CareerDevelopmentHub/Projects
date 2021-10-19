//This code was cited from [https://github.com/saam-khatri/simple-owl-carousel]
// This JavaScript code allows the slider to move on click of the arrow buttons
let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product')
let productPage = Math.ceil(product.length/4);
let l = 0;
let movePer = 26;
let maxMove = 234;
// mobile_view	
let mobView = window.matchMedia("(max-width: 768px)");
if (mobView.matches)
	{
	movePer = 52;
	maxMove = 560;
	}

let rightMover = ()=>{
	if(l == 0){
		l = l + movePer + 2;
	}
	else {
		l = l + movePer;
	}
	
	if (product == 1){l = 0; }
	for(const i of product)
	{
		if (l > maxMove){l = l - movePer;}
		i.style.left = '-' + l + '%';
	}

}
let leftMover = ()=>{
	if(l <= 28){
		l = l - movePer - 2;
	}
	else {
		l = l - movePer;
	}
	
	if (l<=0){l = 0;}
	for(const i of product){
		if (productPage>1){
			i.style.left = '-' + l + '%';
		}
	}
}
span[1].onclick = ()=>{rightMover();}
span[0].onclick = ()=>{leftMover();}