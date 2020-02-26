import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule} from 'ngx-gallery';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { DrinksComponent } from './menu/drinks/drinks.component';
import { FoodComponent } from './menu/food/food.component';
import { FoodItemListComponent } from './menu/food/food-item-list/food-item-list.component';
import { FoodItemComponent } from './menu/food/food-item/food-item.component';
import { DrinkItemComponent } from './menu/drinks/drink-item/drink-item.component';
import { DrinkItemListComponent } from './menu/drinks/drink-item-list/drink-item-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { DropLineFormComponent } from './about/drop-line-form/drop-line-form.component';
import {FormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { BlogItemListComponent } from './blog/blog-item-list/blog-item-list.component';
import { BlogItemComponent } from './blog/blog-item-list/blog-item/blog-item.component';
import { BlogItemDetailComponent } from './blog/blog-item-detail/blog-item-detail.component';
import { RecentPostsComponent } from './blog/recent-posts/recent-posts.component';
import { BlogItemDetailRecentComponent } from './blog/recent-posts/blog-item-detail-recent/blog-item-detail-recent.component';
import { WhatYouThinkFormComponent } from './blog/blog-item-detail/what-you-think-form/what-you-think-form.component';
import { CommentsComponent } from './blog/blog-item-detail/comments/comments.component';
import { CommentItemComponent } from './blog/blog-item-detail/comments/comment-item/comment-item.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    MenuComponent,
    DrinksComponent,
    FoodComponent,
    FoodItemListComponent,
    FoodItemComponent,
    DrinkItemComponent,
    DrinkItemListComponent,
    AboutComponent,
    DropLineFormComponent,
    BlogComponent,
    BlogItemListComponent,
    BlogItemComponent,
    BlogItemDetailComponent,
    RecentPostsComponent,
    BlogItemDetailRecentComponent,
    WhatYouThinkFormComponent,
    CommentsComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxGalleryModule,
    AngularFontAwesomeModule,
    Ng2PageScrollModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
