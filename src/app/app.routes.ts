import { Routes } from '@angular/router';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { BookListComponent } from './shared/pages/book-list/book-list.component';
import { AddBookComponent } from './features/book/add-book/add-book.component';
import { LoginComponent } from './features/login/login/login.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'books', component: BookListComponent},
  { path:'addBooks',component : AddBookComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];
