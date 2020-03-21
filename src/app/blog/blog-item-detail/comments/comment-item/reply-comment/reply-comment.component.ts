import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgModel} from '@angular/forms';
import {CommentItem} from '../../comment-item.model';
import {BlogService} from '../../../../blog.service';

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.css']
})
export class ReplyCommentComponent implements OnInit {
  @Output() submitReply = new EventEmitter<CommentItem>();
  @Input() currentBlogItemId: number;
  @Input() currentCommentItemId: number;
  reply: CommentItem;
  replied: boolean;
  observer$ = this.blogService.updateComment$;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.replied = false;
  }

  postComment(posted: boolean, replyNickName: NgModel, replyComment: NgModel) {
    this.reply = new CommentItem();
    this.reply.owner = replyNickName.value;
    this.reply.content = replyComment.value;
    this.reply.date = Date.now();
    this.submitReply.emit(this.reply);
    this.replied = !this.replied;
  }
}
