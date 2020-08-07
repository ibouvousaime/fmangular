import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewGComponent } from './new-g/new-g.component';
import { NewGameComponent } from './new-game/new-game.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NewGComponent, NewGameComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
