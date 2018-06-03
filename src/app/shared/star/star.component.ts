import { Component, OnInit, OnChanges, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input()rating:number = 4;
  starWidth:number;

  @Output()notify:EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.starWidth = this.rating*86/5;
  }

  onClick(){
    this.notify.emit(this.rating+"");
  }
}
