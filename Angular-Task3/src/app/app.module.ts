import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ColorStylingDirective } from './directives/color-styling.directive';
import { SamplepipePipe } from './pipes/samplepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ColorStylingDirective,
    SamplepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
