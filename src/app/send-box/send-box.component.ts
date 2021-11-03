import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-send-box',
  templateUrl: './send-box.component.html',
  styleUrls: ['./send-box.component.css']
})
export class SendBoxComponent implements OnInit {
  message:string;
  
  constructor(private chat:ChatService) { }

  ngOnInit(): void {
      //localStorage.clear();
      //to clear feed.
  }

  handleSubmit(event:any)
  {
    if(event.keyCode === 13)
    {
      this.send();
    }
  }
  
  send() 
    {
      this.chat.sendMessage(this.message)
      this.message="";
    }

}
