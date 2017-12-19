import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CtRouterModule } from './ct-router.module';
import { AppComponent } from './app.component';
import {CtsServiceService} from './cts-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CtRouterModule,
    HttpClientModule
  ],
  providers: [CtsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
