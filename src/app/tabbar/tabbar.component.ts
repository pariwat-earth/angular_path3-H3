import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
  @Input() y: String = "true";

  @Output() OnTap: EventEmitter<String> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  openslidenav(){
    this.OnTap.emit("true");
  }
}
