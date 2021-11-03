import { Routes } from "@angular/router";
import { ChatRoomComponent } from "./app/chat-room/chat-room.component";
import {LoginFormComponent} from './app/login-form/login-form.component';

export const appRoutes : Routes = [
{ path: 'login', component: LoginFormComponent},
{ path: 'chat', component: ChatRoomComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full'}

];