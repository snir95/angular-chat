import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: any[];

  constructor(private chat:ChatService) { }

  ngOnInit(): void
  {
    this.feed = this.chat.chatMessages;

  /*   window.addEventListener("storage", () => {
      this.chat.getUpdatedMessages();

      this.feed = this.chat.chatMessages;
    }); */
  }
}
