import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commend',
  templateUrl: './commend.component.html',
  styleUrls: ['./commend.component.css']
})
export class CommendComponent implements OnInit {
  imgs:any;
  constructor() { 
    this.imgs=['../../assets/images/1.jpg',
    '../../assets/images/2.jpg',
    '../../assets/images/3.jpg',
    '../../assets/images/4.jpg',
    '../../assets/images/5.jpg'
  ];
  }

  ngOnInit() {
  }

}
