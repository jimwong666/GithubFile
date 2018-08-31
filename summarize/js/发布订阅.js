var PubSub = function(){
    this.handlers = {};
};

PubSub.prototype.Subscribe = function(eventType,handler){
    if(!(eventType in this.handlers)){
        this.handlers[eventType] = [];
    };
    this.handlers[eventType].push(handler);
    return this;
};

PubSub.prototype.Punlish = function(eventType){
    var _args = Array.prototype.slice.call(arguments,1);
    for(var i = 0, _handlders = this.handlers[eventType]; i < _handlders.length; i++){
        _handlders[i].apply(this,_args);
    };
};

var EVENT = new PubSub;

EVENT.Subscribe('Duang',function(masg){
    console.log(masg +'DuangDuangDuang~');
});

EVENT.Punlish('Duang','jim ');