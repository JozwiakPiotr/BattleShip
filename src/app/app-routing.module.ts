import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameRoomComponent } from './game-room/game-room.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'game', component: GameRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
