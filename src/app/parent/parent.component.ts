import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  dataList: string[] = ['A', 'B', 'C']

  ngOnInit(): void {
  }

  deleteData(data: string) {
    this.dataList = this.dataList.filter(item => item !== data);
  }

}
