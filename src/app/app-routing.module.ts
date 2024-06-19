import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NoteProductComponent } from './note-product/note-product.component';
import { ReviewComponent } from './review/review.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'add-review',
    component: NoteProductComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'update-product/:id',
    component: AddProductComponent,
  },
  {
    path: 'add-review/:id',
    component: ReviewComponent,
  },
  {
    path: 'reviews',
    component: ReviewComponent,
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
