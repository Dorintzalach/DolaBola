import { Component, OnInit } from '@angular/core';
import {BlogItem} from '../blog-item.model';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CommentItem} from './comments/comment-item.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  currentBlogItem: BlogItem = null;
  id: number;
  observer$ = this.blogService.blogItem$;


  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
    // this.blogService.getBlogItem(this.id);
    // this.observer$.pipe(map(data => {
    //   const theArray = data[0];
    //   const newItem: BlogItem = new BlogItem();
    //   newItem.id = theArray[0];
    //   newItem.date = theArray[1];
    //   newItem.title = theArray[3];
    //   newItem.imagePath = theArray[4];
    //   newItem.content = theArray[5];
    //   newItem.likes = theArray[6];
    //   newItem.description = theArray[7];
    //   return newItem;
    // })).subscribe((resData: any) => {
    //   this.currentBlogItem = resData;
    // });
    this.currentBlogItem = this.blogService.getBlogItem(this.id);
  }

  likeBlogItem() {
    this.currentBlogItem.likes = this.currentBlogItem.likes + 1;
  }

  onPosted($event: CommentItem) {
    this.blogService.setComment(this.id, $event);
    this.currentBlogItem.comments.push($event);
  }
}
