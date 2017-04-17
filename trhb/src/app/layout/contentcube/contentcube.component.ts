import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contentcube',
  templateUrl: './contentcube.component.html',
  styleUrls: ['./contentcube.component.css']
})
export class ContentcubeComponent implements OnInit {
  @Input() count = 0;
  @Input() text = '';
  @Input() backgroundColor:string = "pink";
  @Input() backgroundImage:string = "";
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  constructor() { }

  ngOnInit() {
  }

}
