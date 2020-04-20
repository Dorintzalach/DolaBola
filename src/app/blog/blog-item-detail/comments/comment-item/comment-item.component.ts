import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CommentItem} from '../comment-item.model';
import {BlogService} from '../../../blog.service';
import {BlogItem} from '../../../blog-item.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() currentComment: CommentItem;
  @Input() currentCommentId: number;
  @Input() currentBlogItemId: number;
  @Input() getCurrentBlogItem: () => BlogItem;
  replied: boolean;
  nickName: string;
  observerUpdateComment$ = this.blogService.updateComment$;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.replied = false;
  }

  setReply() {
    this.replied = true;
  }

  reply($event: CommentItem) {
    if (!this.currentBlogItemId) {
      const blogItem = this.getCurrentBlogItem();
      this.currentBlogItemId = blogItem.id;
    }
    if (this.currentBlogItemId ) {
      this.blogService.setReplyToComment(this.currentBlogItemId, this.currentCommentId, $event);
      this.observerUpdateComment$.subscribe(res => {
        if (res) {
          if (!this.currentComment.replies) {
            this.currentComment.replies = [];
          }
          this.currentComment.replies.push($event);
          this.replied = false;
        }
      });
    }
  }
}
