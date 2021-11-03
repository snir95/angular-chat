import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { SendBoxComponent } from './send-box/send-box.component';
import { UsersComponent } from './users/users.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { appRoutes } from 'src/routes';
import { ChatService } from './services/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SendBoxComponent,
    UsersComponent,
    ChatRoomComponent,
    MessageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
