import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() {
    this.data = '';
  }

  @Input() data: string;
  @Output() deleteData = new EventEmitter<string>();


  ngOnInit(): void {
  }

  onClickDelete(dataDelete: string) {
    this.deleteData.emit(dataDelete);
  }


}
