import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userData = {
    authorization: 'USER',
    name: 'John Doe'
  };

  products = [
    {
      name: 'Iphone 11Pro'
    },
    {
      name: 'Samsung S10'
    },
    {
      name: 'Huawei P30'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
