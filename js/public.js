//通用顶
var searchbox = document.querySelector('.topwrap .top .searchboxwrap .searchbox');
searchbox.onmouseover = function() {
    U.move(searchboxInput, {
        opacity: 80,
        background: 'rgb(153, 153, 153)'
    });
    U.move(searchboxCamera, {
        opacity: 80
    })

}
searchbox.onmouseout = function() {
    U.move(searchboxInput, {
        opacity: 30
    });
    U.move(searchboxCamera, {
        opacity: 30
    })
}

var searchboxInput = document.querySelector('.topwrap .top .searchboxwrap .searchbox #search');
var searchboxCamera = document.querySelector('.topwrap .top .searchboxwrap .searchbox #search+a');
searchbox.onclick = function() {

        searchbox.onfoucs = function() {
            test(searchboxInput);
        }
        searchboxInput.onfoucs = function() {
            test(searchboxInput);
        }

        function test(obj) {
            if (isPlaceholderSupport()) {

                obj.onfocus = function() {
                    if (!this.value) {
                        this.placeholder = '';
                    }
                }
                obj.onblur = function() {
                    if (!this.value) {
                        this.placeholder = '香蜜沉沉烬如霜';
                    }
                }
                return false; // 如果自己有placeholder属性，就不向下进行
            };
            var att = obj.getAttribute('placeholder'); // 提示语
            obj.value = att;

            obj.onfocus = function() {
                if (this.value === att) {
                    this.value = '';
                }
            }

            obj.onblur = function() {
                if (this.value === '') {
                    this.value = att;
                }
            }
        }

    } //通用顶结束