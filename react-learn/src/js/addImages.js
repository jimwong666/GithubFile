import "../css/image.css";

export default () => {
	let smallImg = document.createElement('img');
	let imgZone = document.getElementsByClassName('img')[0];
	// 必须 require 进来
	smallImg.src = require('@/images/qwer.png');
	imgZone.appendChild(smallImg);
	
	let bigImg = document.createElement('img');
	bigImg.src = require('@/images/asdf.jpg');
	imgZone.appendChild(bigImg);
}