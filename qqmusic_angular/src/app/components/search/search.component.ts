import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tags:any;
  constructor() { 
    this.tags=[
      '一起走过的日子 ',
      '落',
      '为你我受冷风吹 ',
      'LOST RIVERS ',
      'TOXIC ',
      '爱的故事上集 ',
      '你一定要幸福 ',
      '双世宠妃2 '
    ];
  }

  ngOnInit() {
  }

}
