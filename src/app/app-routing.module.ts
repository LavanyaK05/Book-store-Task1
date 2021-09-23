import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './MyComponent/add-book/add-book.component';
import { GetBookComponent } from './MyComponent/get-book/get-book.component';

const routes: Routes = [
  {path:'',redirectTo:'addBook',pathMatch:"full"},
  {path: 'books', component: GetBookComponent},
  {path: 'addBook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GetBookComponent,AddBookComponent]