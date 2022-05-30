import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
    GameRoomComponent,
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
