import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconComponent } from './icon/icon.component';
import { TooltipDirective } from './icon/icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    IconListComponent,
    IconComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
