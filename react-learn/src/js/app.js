// index.js
import sum from './sum';
import addImages from './addImages';

export default () => {
	addImages();
	console.log(sum(1, 4));
}