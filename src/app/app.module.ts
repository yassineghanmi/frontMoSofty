import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { NoteProductComponent } from './note-product/note-product.component';
import { StatiqueProductComponent } from './statique-product/statique-product.component';
import { ReviewComponent } from './review/review.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductComponent,
    NoteProductComponent,
    StatiqueProductComponent,
    ReviewComponent,
    NavBarComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
