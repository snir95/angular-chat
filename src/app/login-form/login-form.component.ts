import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username?: string;

  constructor(private chat: ChatService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public login() {
    if(this.username){
    this.chat.user = this.username;
    this.router.navigate(['/chat']);
   }
  }

  handleSubmit(event:any)
  {
    if(event.keyCode === 13)
    {
      this.login();
    }
  }
}