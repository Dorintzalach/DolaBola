import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../blog-item.model';
import {hasOwnProperty} from 'tslint/lib/utils';
import {CommentItem} from './comment-item.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  commentArrow: string;
  openArrow: string;
  closeArrow: string;
  @Input() blogItem: any;
  @Input() BlogItemId: any;
  // blogItem: BlogItem;
  commentsOpen: boolean;

  constructor() {
    this.openArrow = 'flaticon-down-arrow';
    this.closeArrow = 'flaticon-right-arrow';
  }

  ngOnInit() {
    this.commentsOpen = false;
    this.commentArrow = this.closeArrow;
  }

  // openComments() {
  //   this.commentsOpen = true;
  //   this.commentArrow = this.openArrow;
  //   console.log('here');
  // }
  //
  // closeComments() {
  //   this.commentsOpen = false;
  //   this.commentArrow = this.closeArrow;
  //   console.log('here');
  // }

  getComments() {
    if (this.commentsOpen) {
      this.commentsOpen = false;
      this.commentArrow = this.closeArrow;
    } else {
      this.commentsOpen = true;
      this.commentArrow = this.openArrow;
    }
  }

  setComment = (): BlogItem => {
    return this.blogItem;
  }
}
