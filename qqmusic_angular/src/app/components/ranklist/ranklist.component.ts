import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-ranklist',
  templateUrl: './ranklist.component.html',
  styleUrls: ['./ranklist.component.css']
})
export class RanklistComponent implements OnInit {
  // id:any;
    public conArr:any;
    public titArr:any;
    public imgArr:any;
    // testStr='???';
  constructor(private router:ActivatedRoute) { 
    this.conArr=[{
      img:'../../assets/images/21.jpg',
      tit:'巅峰榜·流行指数',
      name1:'那一夜',
      singer1:'- G.E.M. 邓紫棋',
      name2:'梦不落雨林',
      singer2:'- 张艺兴',
      name3:'归去来兮',
      singer3:'- 叶炫清'

    },{
      img:'../../assets/images/22.jpg',
      tit:'巅峰榜·热歌',
      name1:'没说什么',
      singer1:'- 张杰',
      name2:'耳朵',
      singer2:'- 李荣浩',
      name3:'光年之外',
      singer3:'- G.E.M. 邓紫棋'
    },{
      img:'../../assets/images/23.jpg',
      tit:'巅峰榜·新歌',
      name1:'耳朵',
      singer1:'- 李荣浩',
      name2:'没说什么',
      singer2:'- 张杰',
      name3:'那一夜',
      singer3:'- G.E.M. 邓紫棋'
      
    },{
      img:  '../../assets/images/24.jpg',
      tit:'巅峰榜·2018中国好声音',
      name1:'为你我受冷风吹',
      singer1:'- 大壮',
      name2:'魔鬼中的天使（Live）',
      singer2:'- 康树龙',
      name3:'魔鬼中的天使（尊享版）',
      singer3:'- 康树龙'
    },{
      img:  '../../assets/images/25.jpg',
      tit:'巅峰榜·网络歌曲',
      name1:'不在',
      singer1:'- 韩安旭',
      name2:'地铁等待',
      singer2:'- 宋孟君',
      name3:'可不可以',
      singer3:'- 艾辰'
    },{
      img:  '../../assets/images/26.jpg',
      tit:'巅峰榜·内地',
      name1:'耳朵',
      singer1:'- 李荣浩',
      name2:'没说什么',
      singer2:'- 张杰',
      name3:'贝贝',
      singer3:'- 李荣浩'
    },{
      img:  '../../assets/images/27.jpg',
      tit:'巅峰榜·港台',
      name1:'怡好',
      singer1:'- A-Lin',
      name2:'有一种悲伤',
      singer2:'- A-Lin',
      name3:'你敢不敢再傻一次',
      singer3:'- 吴克群'
    },{
      img:  '../../assets/images/28.jpg',
      tit:'巅峰榜·欧美',
      name1:'Kiss and Make Up',
      singer1:'- Dua Lipa',
      name2:'1999',
      singer2:'- Charli XCX',
      name3:"I'm Still Here",
      singer3:'- Sia'
    },{
      img:  '../../assets/images/29.jpg',
      tit:'巅峰榜·韩国',
      name1:'나라는 꿈',
      singer1:'- 조이 (Joy)',
      name2:'STAY BY MY SIDE',
      singer2:'- TWICE (트와이스)',
      name3:'그대 그대 그대',
      singer3:'- 윤미래 (尹美莱)'
    },{
      img:  '../../assets/images/210.jpg',
      tit:'巅峰榜·影视金曲',
      name1:'归去来兮',
      singer1:'- 叶炫清',
      name2:'나라는 꿈',
      singer2:'- 조이 (Joy)',
      name3:'卡路里',
      singer3:'- 火箭少女101'
    },{
      img:  '../../assets/images/211.jpg',
      tit:'巅峰榜·日本',
      name1:'まっしろ (白皑)',
      singer1:'- ビッケブランカ (Vicke Blanka)',
      name2:'PSYCHIC MAGIC',
      singer2:'- m-flo (陨-浮流)',
      name3:'イルミネーション (Illumination)',
      singer3:'- End of the World (世界の終わり)'
    },{
      img:  '../../assets/images/212.jpg',
      tit:'巅峰榜·腾讯音乐人原创榜',
      name1:'臆想',
      singer1:'- 莉莉童 (LIJIN.)',
      name2:'当我要走的时候 (正式版)',
      singer2:'- 陈硕子',
      name3:'赝品',
      singer3:'- 简弘亦'
    },{
      img:  '../../assets/images/213.jpg',
      tit:'巅峰榜·K歌金曲',
      name1:'年少有为',
      singer1:'- 陈诚',
      name2:'刚好遇见你',
      singer2:'- K.D',
      name3:'体面',
      singer3:'- Gray'
    }];
  }

  ngOnInit() {
    var that=this;
    this.router.params.subscribe(function(data){
      console.log(data.aid);
      var num=data.aid*1;
      switch(num){
        case 1 : 
          that.titArr=that.conArr[0].tit;
          that.imgArr=that.conArr[0].img;
        break;

        case 2 :
          that.titArr=that.conArr[1].tit;          
          that.imgArr=that.conArr[1].img;
        break;

        case 3 :
          that.titArr=that.conArr[2].tit;
          that.imgArr=that.conArr[2].img;
        break;

        case 4 : 
          that.titArr=that.conArr[3].tit;
          that.imgArr=that.conArr[3].img;
        break;

        case 5 :
        that.titArr=that.conArr[4].tit;
        that.imgArr=that.conArr[4].img;
        break;

        case 6 : 
        that.titArr=that.conArr[5].tit;
        that.imgArr=that.conArr[5].img;
        break;

        case 7 : 
        that.titArr=that.conArr[6].tit;
        that.imgArr=that.conArr[6].img;
        break;

        case 8 :
        that.titArr=that.conArr[7].tit;
        that.imgArr=that.conArr[7].img;
        break;

        case 9 : 
        that.titArr=that.conArr[8].tit;
        that.imgArr=that.conArr[8].img;
        break;

        case 10 : 
        that.titArr=that.conArr[9].tit;
        that.imgArr=that.conArr[9].img;
        break;

        case 11:
        that.titArr=that.conArr[10].tit;
        that.imgArr=that.conArr[10].img;
        break;

        case 12: 
        that.titArr=that.conArr[11].tit;
        that.imgArr=that.conArr[11].img;
        break;

        case 13: 
        that.titArr=that.conArr[12].tit;
        that.imgArr=that.conArr[12].img;
        break;
      }
      
    });
  }

}
