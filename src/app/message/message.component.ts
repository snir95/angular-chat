import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat-message.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;


  constructor(private chat:ChatService) 
    { 
      
    }
  
  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message!;
    this.userName = chatMessage.userName!;
    this.timeStamp = chatMessage.timeSent!;
    this.isOwnMessage= this.chat.user == this.userName;
  }

}
