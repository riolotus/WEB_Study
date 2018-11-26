(function() {
    var data = [{
        url: 'images/pic_1.jpg',
        href: 'http://www.iqiyi.com/v_19rrl56nno.html'
    }, {
        url: 'images/pic_2.jpg',
        href: 'http://www.iqiyi.com/v_19rre6z8z8.html'
    }, {
        url: 'images/pic_3.jpg',
        href: 'http://www.iqiyi.com/v_19rrl41gt8.html'
    }, {
        url: 'images/pic_4.jpg',
        href: 'http://www.iqiyi.com/v_19rrk3p4tc.html'
    }, {
        url: 'images/pic_5.jpg',
        href: 'http://www.iqiyi.com/v_19rrfq8le4.html'
    }, {
        url: 'images/pic_6.jpg',
        href: 'http://www.iqiyi.com/v_19rr7pkg3o.html'
    }, {
        url: 'images/pic_7.jpg',
        href: 'http://www.iqiyi.com/v_19rra8tjv0.html'
    }, {
        url: 'images/pic_8.jpg',
        href: 'http://www.iqiyi.com/v_19rr7rc45k.html'
    }, {
        url: 'images/pic_9.jpg',
        href: 'http://www.iqiyi.com/v_19rrhspc38.html'
    }, {
        url: 'images/pic_10.jpg',
        href: 'http://www.iqiyi.com/v_19rrk0uch0.html'
    }, {
        url: 'images/pic_11.jpg',
        href: 'http://www.iqiyi.com/v_19rrl56nno.html'
    }, {
        url: 'images/pic_12.jpg',
        href: 'http://www.iqiyi.com/v_19rre6z8z8.html'
    }, {
        url: 'images/pic_13.jpg',
        href: 'http://www.iqiyi.com/v_19rrl41gt8.html'
    }, {
        url: 'images/pic_14.jpg',
        href: 'http://www.iqiyi.com/v_19rrk3p4tc.html'
    }, {
        url: 'images/pic_15.jpg',
        href: 'http://www.iqiyi.com/v_19rrfq8le4.html'
    }, {
        url: 'images/pic_16.jpg',
        href: 'http://www.iqiyi.com/v_19rr7pkg3o.html'
    }, {
        url: 'images/pic_17.jpg',
        href: 'http://www.iqiyi.com/v_19rra8tjv0.html'
    }, {
        url: 'images/pic_18.jpg',
        href: 'http://www.iqiyi.com/v_19rr7rc45k.html'
    }, {
        url: 'images/pic_19.jpg',
        href: 'http://www.iqiyi.com/v_19rrhspc38.html'
    }, {
        url: 'images/pic_20.jpg',
        href: 'http://www.iqiyi.com/v_19rrk0uch0.html'
    }];
    var btnLeft = U.getClass('privateC_arrL')[0];
    var btnRight = U.getClass('privateC_arrR')[0];
    var privateC_pic = U.getClass('privateC_pic')[0];
    var bgImg = U.getClass('bgImg')[0];
    var arrImg = []; //存图片
    var arrPos = []; //存图片位置

    //创建全部图片
    for (var i = 0; i < data.length; i++) {
        var oImg = U.create('img');
        bgImg.src = data[2].url;
        oImg.setAttribute('src', data[i].url);
        oImg.setAttribute('datahref', data[i].href);
        if (i >= 5) {
            oImg.style.display = 'none';
        } else {
            oImg.setAttribute('index', i);
        }
        arrImg.push(oImg);
        U.append(privateC_pic, oImg);
    }

    //获取显式出现的五张图片属性
    for (var i = 0; i < 5; i++) {
        var Imgs = arrImg[i];
        arrPos.push({
            width: parseFloat(U.getStyle(Imgs, 'width')),
            height: parseFloat(U.getStyle(Imgs, 'height')),
            top: parseFloat(U.getStyle(Imgs, 'top')),
            left: parseFloat(U.getStyle(Imgs, 'left')),
            zIn: U.getStyle(Imgs, 'z-index')
        });
    }
    //上一张
    btnLeft.onclick = function() {
        arrImg.unshift(arrImg.pop());
        change(arrImg);

    }

    //下一张
    btnRight.onclick = function() {
        arrImg.push(arrImg.shift());
        change(arrImg);
    }

    //-------------点击事件-------------//
    for (var i = 0; i < arrImg.length; i++) {
        arrImg[i].onclick = function() {
            switch (this.getAttribute('index')) {
                case '0':
                    arrImg.unshift(arrImg.pop());
                    arrImg.unshift(arrImg.pop());
                    change(arrImg);
                    break;
                case '1':
                    arrImg.unshift(arrImg.pop());
                    change(arrImg);
                    break;
                case '2':
                    open(this.getAttribute('datahref'));
                    break;
                case '3':
                    arrImg.push(arrImg.shift());
                    change(arrImg);
                    break;
                case '4':
                    arrImg.push(arrImg.shift());
                    arrImg.push(arrImg.shift());
                    change(arrImg);
                    break;
            }
        }
    }

    //----------------------------------------//
    function change(arr) {
        bgImg.src = arr[2].src;
        for (var i = 0; i < arr.length; i++) {
            var cImg = arr[i];
            if (i < 5) {
                cImg.setAttribute('index', i);
                cImg.style.zIndex = arrPos[i].zIn;
                cImg.style.display = 'block';
                U.move(cImg, {
                    width: arrPos[i].width,
                    height: arrPos[i].height,
                    left: arrPos[i].left,
                    top: arrPos[i].top
                });
            } else {
                cImg.removeAttribute('index');
                cImg.style.display = 'none';
                cImg.style.width = '482px';
                cImg.style.height = '270px';
                cImg.style.top = '0px';
                cImg.style.left = '465.5px';
                cImg.style.zIndex = '0';
            }
        }
    }
})();