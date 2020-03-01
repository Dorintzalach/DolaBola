import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgModel} from '@angular/forms';
import {CommentItem} from '../../comment-item.model';

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.css']
})
export class ReplyCommentComponent implements OnInit {
  @Output() submitReply = new EventEmitter<CommentItem>();
  reply: CommentItem;

  constructor() { }

  ngOnInit() {
  }

  postComment(posted: boolean, replyNickName: NgModel, replyComment: NgModel) {
    this.reply = new CommentItem();
    this.reply.owner = replyNickName.value;
    this.reply.content = replyComment.value;
    this.reply.date = Date.now();
    this.submitReply.emit(this.reply);
  }
}
