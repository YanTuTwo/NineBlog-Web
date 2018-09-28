let carousel = {
    json: [
        {
            //  0
            width: 200,
            top: 60,
            left: 150,
            opacity: 0.2,
            zIndex: 1
        },
        {
            // 1
            width: 350,
            top: 80,
            left: 100,
            opacity: 0.4,
            zIndex: 2
        },
        {
            // 2
            width: 500,
            top: 100,
            left: 0,
            opacity: 0.6,
            zIndex: 3
        },
        {
            // 3
            width: 650,
            top: 120,
            left: 100,
            opacity: 0.8,
            zIndex: 4
        },
        {
            //4
            width: 800,
            top: 70,
            left: 200,
            opacity: 1,
            zIndex: 5
        },
        {
            //5
            width: 650,
            top: 120,
            left: 450,
            opacity: 0.8,
            zIndex: 4
        },
        {
            //6
            width: 500,
            top: 100,
            left: 700,
            opacity: 0.6,
            zIndex: 3
        },
        {
            //7
            width: 350,
            top: 80,
            left: 750,
            opacity: 0.4,
            zIndex: 2
        },
        {
            //8
            width: 200,
            top: 60,
            left: 850,
            opacity: 0.2,
            zIndex: 1
        }
    ],
    flag: false,
    auto: '',
    animation(obj, json) {
        // console.log(this);
        clearInterval(obj.timer);
        let _that = this;
        obj.timer = setInterval(function() {
            let moveflag = true;
            //json里面有几个属性就要执行几次
            let target = 0; //记录目标位置
            let leader = 0; //记录原本位置
            let speed = 0; //记录速度
            for (let key in json) {
                //遍历json
                if (key == 'opacity') {
                    target = Math.round(json['opacity'] * 100); //将目的opacity的值转换成0-100
                    leader = _that.getStyle(obj, 'opacity') * 100; //获取现在的opacity的值转换成0-100
                } else {
                    target = parseInt(json[key]);
                    leader = parseInt(_that.getStyle(obj, key));
                }
                speed = (target - leader) / 10;
                //每次移动差值得10分之一
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //步长取整
                leader = leader + speed; //每次移动后的位置
                if (key == 'opacity') {
                    obj.style.opacity = leader / 100;
                    //谷歌
                    obj.style.filter = 'alpha(opacity=' + leader + ')';
                    //ie
                } else if (key == 'zIndex') {
                    obj.style.zIndex = json['zIndex'];
                } else {
                    obj.style[key] = leader + 'px';
                }
                if (leader != target) {
                    //移动没有完成flag就等于flase，全部移动完成时就不会赋值
                    moveflag = false;
                }
            }
            if (moveflag) {
                //全部完成后停止定时器，如果存在回调函数则执行
                clearInterval(obj.timer);
                // if (fn) {
                //     fn();
                // }
                _that.flag = true;
            }
        }, 20);
    },
    getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    },
    animationCallback() {
        console.log(this);
        this.flag = true;
    },
    move() {
        for (var i = 0; i < this.liarr.length; i++) {
            this.animation(this.liarr[i], this.json[i], this.animationCallback);
        }
    },
    nextClick() {
        if (this.flag) {
            var pop = this.json.pop();
            this.json.unshift(pop);
            this.move();
            this.flag = false;
        }
    },
    prevClick() {
        if (this.flag) {
            var shift = this.json.shift();
            this.json.push(shift);
            this.move();
            this.flag = false;
        }
    },
    // autoplay() {
    //     clearInterval(this.auto);
    //     this.auto = setInterval(() => {
    //         this.nextClick();
    //     },2500)
    //     console.log(this.auto);
    // },
    // stopplay() {
    //     console.log(this.auto);
    //     clearInterval(this.auto);
    // },
    // initJson(count, width) {
    //     let obj = {};
    //     for (let i = 0; i < count; i++) {
    //         obj.width = 0;
    //         obj.top = 60,
    //         obj.left = 850,
    //         obj.opacity = 0.2,
    //         obj.zIndex = 1
    //     }
    // },
    init(id) {
        const carousel = document.getElementById(id);
        // console.log(carousel.offsetWidth);
        const prev = document.getElementById('prev');
        prev.addEventListener('click', this.prevClick.bind(this));
        const next = document.getElementById('next');
        next.addEventListener('click', this.nextClick.bind(this));
        this.liarr = carousel.getElementsByTagName('li');
        // console.log(this.liarr.length);
        // this.initJson(this.liarr.length, carousel.offsetWidth);
        this.move();
    }
};

export default carousel;
