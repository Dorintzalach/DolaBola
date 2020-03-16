import { Component, OnInit } from '@angular/core';
import {BlogItem} from '../blog-item.model';
import {BlogService} from '../blog.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  recentBlogItems: BlogItem[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    // this.blogService.getBlogItems().pipe(map(data => {
    //     const result: BlogItem[] = [];
    //     for (const key in data) {
    //       if (data.hasOwnProperty(key)) {
    //         const newItem = new BlogItem();
    //         newItem.id = data[key][0];
    //         newItem.date = data[key][1];
    //         newItem.title = data[key][3];
    //         newItem.imagePath = data[key][4];
    //         newItem.content = data[key][5];
    //         newItem.likes = data[key][6];
    //         newItem.description = data[key][7];
    //         result.push(newItem);
    //       }
    //     }
    //     return result;
    //   })
    // ).subscribe(responseData => {
    //   console.log(responseData);
    //   this.recentBlogItems = responseData;
    // }, error => {
    //   console.log('something went wrong');
    // });
  }
}
