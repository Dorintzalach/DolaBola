import {Component, Input, OnInit} from '@angular/core';
import {CommentItem} from '../comment-item.model';
import {BlogService} from '../../../blog.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() currentComment: CommentItem;
  @Input() currentCommentId: number;
  @Input() currentBlogItemId: number;
  replied: boolean;
  nickName: string;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.replied = false;
  }

  setReply() {
    this.replied = true;
  }

  reply($event: CommentItem) {
    console.log($event);
    this.blogService.setReplyToComment(this.currentBlogItemId, this.currentCommentId, $event);
    this.replied = !$event;
  }
}
