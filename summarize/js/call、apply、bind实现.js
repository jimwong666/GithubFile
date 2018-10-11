// bind
Function.prototype.bind = function(){
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    };
	var fn = this;
	var args = Array.prototye.slice.call(arguments);
	var context = args.shift();

	return function(){
		return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
	};
};


// call
Function.prototype.myCall = function (context) {
    var context = context || window;
    // 给 context 添加一个属性
    // getValue.call(a, 'yck', '24') => a.fn = getValue
    // console.log(this,context.fn); 
    context.fn = this;
    // console.log(this,context.fn);  ////////this的指向一直都没变->调用的函数。context.fn变成了调用的函数，即变相改变了this的指向 
    // 将 context 后面的参数取出来
    var args = [...arguments].slice(1);
    // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
    var result = context.fn(...args);
    // 删除 fn
    delete context.fn;
    return result;
}


// apply
Function.prototype.myApply = function (context) {
    var context = context || window;
    context.fn = this;

    var result;
    // 需要判断是否存储第二个参数
    // 如果存在，就将第二个参数展开
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }

    delete context.fn
    return result
}


// bind 2
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
        return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}