(function() {
    var data = [{
        src: 'images/focus1.jpg',
        url: 'http://www.iqiyi.com/v_19rr1wzek8.html?src=focustext_1_20130410_1',
        title: '天下第一镖局'
    }, {
        src: 'images/focus2.jpg',
        url: 'https://www.iqiyi.com/v_19rrk40ajc.html?list=19rrm9rybq#curid=101621300_b953bf1841e548dcb9a9dfb7a8ca997a&src=focustext_1_20130410_5',
        title: '功夫'
    }, {
        src: 'images/focus3.jpg',
        url: 'https://www.iqiyi.com/v_19rrklq2bs.html?list=19rrlsy61i#curid=406283300_7b42a1a27ff121c201ee5e6c6d757817&src=focustext_1_20130410_3',
        title: '蚁人'
    }, {
        src: 'images/focus4.jpg',
        url: 'https://www.iqiyi.com/v_19rqy8y3hw.html',
        title: '狂龙伏妖'
    }, {
        src: 'images/focus5.jpg',
        url: 'http://www.iqiyi.com/lib/m_217202814.html',
        title: '快把我哥带走'
    }, {
        src: 'images/focus6.jpg',
        url: 'https://www.iqiyi.com/v_19rrc6xoro.html',
        title: '肆式青春'
    }, {
        src: 'images/focus7.jpg',
        url: 'https://www.iqiyi.com/v_19rrcmjjz8.html',
        title: '幸福马上来'
    }, {
        src: 'images/focus8.jpg',
        url: 'https://www.iqiyi.com/v_19rr7p8s48.html',
        title: '机器之血'
    }, {
        src: 'images/focus9.jpg',
        url: 'https://www.iqiyi.com/v_19rr24dq6c.html',
        title: '济公之神龙再现'
    }, {
        src: 'images/focus10.jpg',
        url: 'https://www.iqiyi.com/v_19rrfkek9w.html',
        title: '灵魂摆渡黄泉'
    }];

    var oFocus = U.getClass('focus')[0];
    var oUl = U.create('ul');
    oUl.setAttribute('id', 'focuslist');
    var arrLi = []; //图片
    var arrB = []; //分页
    var n = 0; //n是选中的项
    var timer = null;


    //创建ul
    for (var i = 0; i < data.length; i++) {
        var oLi = U.create('li');
        oLi.innerHTML = '<a href=' + data[i].url + ' target="_blank"></a>';
        oLi.style.backgroundImage = 'url(' + data[i].src + ')';

        if (i === 0) {
            //提升第一张的层级，否则最后一张出现在最上层
            oLi.style.zIndex = 1;
        } else {
            oLi.style.opacity = 0;
        }
        arrLi.push(oLi);
        U.append(oUl, oLi);
    }
    U.append(oFocus, oUl);

    //左右按钮
    var btnLeft = U.create('span');
    btnLeft.setAttribute('id', 'up');
    var btnRight = U.create('span');
    btnRight.setAttribute('id', 'down');
    U.append(oFocus, btnLeft);
    U.append(oFocus, btnRight);


    //分页
    var oP = U.create('p');
    for (var i = 0; i < data.length; i++) {
        var oB = U.create('b');
        if (i === 0) {
            oB.className = 'selected';
        }
        arrB.push(oB);
        U.append(oP, oB);
    }
    U.append(oFocus, oP);

    //标题

    // 创建标题
    var oTitle = U.create('div');
    oTitle.innerHTML = data[0].title;
    oTitle.className = 'title';
    U.append(oFocus, oTitle);

    timer = setInterval(auto, 2000);
    oFocus.onmouseover = function() {
        clearInterval(timer);
    }


    oFocus.onmouseout = function() {
        timer = setInterval(auto, 2000);
    }


    //上一张
    btnLeft.onclick = function() {
        n--;
        if (n < 0) {
            n = data.length - 1;
        }
        change();
    }


    //下一张
    btnRight.onclick = function() {
        n++;
        if (n >= data.length) {
            n = 0;
        }
        change();
    }


    //分页
    for (var i = 0; i < arrB.length; i++) {
        arrB[i].index = i;
        arrB[i].onmouseover = function() {
            n = this.index;
            change();
        }
    }

    //自动执行
    function auto() {
        n++;
        if (n >= data.length) {
            n = 0;
        }
        change();
    }

    function change() {
        for (var i = 0; i < arrLi.length; i++) {
            U.removeClass(arrB[i], 'selected');
            arrLi[i].style.zIndex = 0;
            U.move(arrLi[i], {
                opacity: 0
            });
        }
        U.addClass(arrB[n], 'selected');
        arrLi[n].style.zIndex = 1;
        oTitle.innerHTML = data[n].title;
        U.move(arrLi[n], {
            opacity: 100
        });
    }
    //----------------导航下拉列表--------------------//
    var daohang = $('.topwrap .top .logo .rightNav');
    var dao_item = $('.topwrap .qy-nav-wrap');
    var dao_timer = null;
    clearTimeout(dao_timer);
    daohang.mouseenter(function() {
        dao_item.css('display', 'block');
    });
    $(document).click(function() {
        dao_item.css('display', 'none');
    });
    $(document).mouseleave(function() {
        dao_item.css('display', 'none');
    });

    //================================================//


    //---------------------首页下拉列表-------------//
    var toIndex = $('.topwrap .top .logo #toIndex');
    var in_item = $('.topwrap .top .logo .leftNavWrap');
    toIndex.mouseenter(function() {
        in_item.css('display', 'block');
    });
    $(document).click(function() {
        in_item.css('display', 'none');
    });
    $(document).mouseleave(function() {
        in_item.css('display', 'none');
    });
    //================================================//
})();