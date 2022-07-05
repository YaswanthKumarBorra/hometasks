import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualComponent } from './manual-comp/manual.component';
import { CliComponent } from './cli-comp/cli.component';


@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    CliComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }