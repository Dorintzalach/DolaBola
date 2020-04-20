import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class BlogItemDetailComponent implements OnInit, OnChanges {
  currentBlogItem: BlogItem = null;
  id: number;
  observer$ = this.blogService.blogItem$;
  observerSetLikes$ = this.blogService.updateLikes$;


  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.blogService.getBlogItem(this.id);
      console.log(this.id);
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.id = +params.id;
      this.blogService.getBlogItem(this.id);
      this.observer$.subscribe(data => {
        console.log(data);
        this.currentBlogItem = data;
      });
    });
  }

  likeBlogItem($event) {
    this.blogService.setLike(this.currentBlogItem.id);
    this.observerSetLikes$.subscribe(res => {
      if (res) {
        this.currentBlogItem.likes = this.currentBlogItem.likes + 1;
      }
    });
  }

  onPosted($event: CommentItem) {
    if (!this.id) {
      this.id = this.currentBlogItem.id;
    }
    $event.blogItemID = this.id;
    this.blogService.setComment(this.id, $event, true);
    this.observer$.subscribe(data => {
      if (!this.currentBlogItem.comments) {
        this.currentBlogItem.comments = [];
      }
      this.currentBlogItem.comments.push($event);
    });
    // this.observerUpdateComment$.subscribe(res => {
    //   console.log(res);
    //   if (!this.currentBlogItem.comments) {
    //     this.currentBlogItem.comments = [];
    //   }
    //   this.currentBlogItem.comments.push($event);
    // });
    // this.blogService.getBlogItem(this.id);
    // this.observer$.subscribe(data => {
    //   this.currentBlogItem = data;
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.observer$.subscribe(data => {
      console.log('on changes');
      console.log(data);
      this.currentBlogItem = data;
    });
  }


}
