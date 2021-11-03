import { Injectable } from "@angular/core";
import { ChatMessage } from "../models/chat-message.model";

@Injectable()
export class ChatService
{
  user:string;
  chatMessages: any[];
  // chatMessage: ChatMessage;

  constructor() {
    this.getUpdatedMessages();
  }

  sendMessage(msg: string)
  {
    const timestamp = this.getTimeStamp();
    
    let message = {
      message:msg,
      timeSent:timestamp,
      userName: this.user
    };

    this.chatMessages.push(message);

    localStorage.setItem('messages',JSON.stringify(this.chatMessages));
  }

   getTimeStamp()
  {
    const now = new Date();
    return now;
  }

  getMessages()
  {
    return this.chatMessages;
  }

  getUpdatedMessages() {
    this.chatMessages = JSON.parse(localStorage.getItem('messages') || '[]');
  }
}