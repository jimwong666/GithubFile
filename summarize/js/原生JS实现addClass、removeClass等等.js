window.onload = function () {
    extendBtnSwitch();
    switchZone()
};

function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
//hasClass
hasClass = function (elem, c) {
    return classReg(c).test(elem.className);
};
//addClass
addClass = function (elem, c) {
    if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
    }
};
//removeClass
removeClass = function (elem, c) {
    elem.className = elem.className.replace(classReg(c), ' ');
};
//toggleClass
function ToggleClass(elem,c) {
    var fn = function () {
        hasClass(elem, c) ? removeClass(elem, c) : addClass(elem, c);
    };
    fn(elem, c);
}

function extendBtnSwitch() {
  var tagBtn = document.querySelector('.extendBtn'),
      leftNav = document.querySelector('.leftNav'),
      rightNav = document.querySelector('.mainout');

    tagBtn.onclick = function () {
        ToggleClass(tagBtn,'active');
        ToggleClass(leftNav,'active');
        ToggleClass(rightNav,'active');
    }

}

function switchZone() {
    var topNavItem = document.querySelectorAll('.topNavItem'),
        zoneSwitchItem = document.querySelectorAll('.zoneSwitchItem'),
        navLen = topNavItem.length,
        zoneSwitchLen = zoneSwitchItem.length;
    /*方法一*/
    // for(var i = 0;i < navLen; i ++){
    //     topNavItem[i].Index = i;
    //     topNavItem[i].onclick = function () {
    //         for(var n =0;n<navLen;n++ ){
    //             removeClass(topNavItem[n],'active');
    //             addClass(this,'active');
    //         }
    //         for(var m = 0;m<zoneSwitchLen; m++ ){
    //             removeClass(zoneSwitchItem[m],'active');
    //             addClass(zoneSwitchItem[this.Index],'active')
    //         }
    //
    //     }
    // }

    /*方法二*/
    for(var i = 0;i < navLen; i ++) {
        (function (i) {
            topNavItem[i].onclick = function () {
                for (var n = 0; n < navLen; n++) {
                    removeClass(topNavItem[n], 'active');
                    addClass(this, 'active');
                }
                for (var m = 0; m < zoneSwitchLen; m++) {
                    removeClass(zoneSwitchItem[m], 'active');
                    addClass(zoneSwitchItem[i], 'active')
                }
            }
        })(i)
    }

    /*方法三  只兼容chrome*/
    // for(let i = 0;i < navLen; i ++){
    //     topNavItem[i].onclick = function () {
    //         for(var n =0;n<navLen;n++ ){
    //             removeClass(topNavItem[n],'active');
    //             addClass(this,'active');
    //         }
    //         for(var m = 0;m<zoneSwitchLen; m++ ){
    //             removeClass(zoneSwitchItem[m],'active');
    //             addClass(zoneSwitchItem[i],'active')
    //         }
    //
    //     }
    // }
}