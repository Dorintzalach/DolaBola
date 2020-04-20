import { Component, OnInit } from '@angular/core';
import {BlogItem} from '../blog-item.model';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  recentBlogItems: BlogItem[];
  observer$ = this.blogService.recentPosts$;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getRecentPosts();
    this.observer$.subscribe(res => {
      console.log(res);
      this.recentBlogItems = res;
    });
  }
}
