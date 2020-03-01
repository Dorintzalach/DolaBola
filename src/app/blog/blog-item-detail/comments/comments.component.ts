import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../blog-item.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  commentArrow: string;
  openArrow: string;
  closeArrow: string;
  @Input() currentBlogItem: BlogItem;
  @Input() currentBlogItemId: number;
  commentsOpen: boolean;

  constructor() {
    this.openArrow = 'flaticon-down-arrow';
    this.closeArrow = 'flaticon-right-arrow';
  }

  ngOnInit() {
    this.commentsOpen = false;
    this.commentArrow = this.closeArrow;
  }

  getComments() {
    if (this.commentsOpen) {
      this.commentsOpen = false;
      this.commentArrow = this.closeArrow;
    } else {
      this.commentsOpen = true;
      this.commentArrow = this.openArrow;
    }
  }
}
