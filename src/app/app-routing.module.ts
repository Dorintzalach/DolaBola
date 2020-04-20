import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {BlogItemDetailComponent} from './blog/blog-item-detail/blog-item-detail.component';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'blog/:id', component: BlogItemDetailComponent,
    children: [
      // {path: '', redirectTo: 'blog/:id', pathMatch: 'full'}
    ] },
  // {path: 'blog/:id', component: BlogItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
