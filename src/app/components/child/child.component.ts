import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() getMsgFromParent !: string;
msg : string = `Yes I Will Work Hard!!`
@Output() sendMsgToParent : EventEmitter<string> = new EventEmitter<string>()
  
constructor() { }

  ngOnInit(): void {
    // this.sendMsgToParent.emit(this.msg);
  }
  sendMsg(){
    this.sendMsgToParent.emit(this.msg);
  }

}
