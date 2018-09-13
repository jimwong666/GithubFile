// 柯里化
////标准版
function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		var newArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(this, newArgs);
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}
var multi = curry(multiFn);
multi(2,3,4);



//// 改进版
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
	console.log('外层' + args);
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
		console.log('内层' + newArgs);
        if(newArgs.length < length){
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}
function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);


multi(2)(3)(4);