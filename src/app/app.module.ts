import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingCompComponent } from './components/listing-comp/listing-comp.component';
import { DetailsCompComponent } from './components/details-comp/details-comp.component';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListingCompComponent,
    DetailsCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
