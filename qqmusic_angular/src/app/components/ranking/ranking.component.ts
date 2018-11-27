import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  // imgs:any;
  // tits:any;
  objArr:any;
  constructor(private router:ActivatedRoute) { 
    this.objArr=[
    {
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
    console.log(this.router.params);
  }

}
