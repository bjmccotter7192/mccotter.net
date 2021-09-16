import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscGolfComponent } from './disc-golf/disc-golf.component';
import { NyGiantsComponent } from './ny-giants/ny-giants.component';
import { WashNatsComponent } from './wash-nats/wash-nats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DiscGolfComponent,
    NyGiantsComponent,
    WashNatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
