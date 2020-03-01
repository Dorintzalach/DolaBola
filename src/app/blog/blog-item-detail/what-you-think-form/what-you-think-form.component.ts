import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommentItem} from '../comments/comment-item.model';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-what-you-think-form',
  templateUrl: './what-you-think-form.component.html',
  styleUrls: ['./what-you-think-form.component.css']
})
export class WhatYouThinkFormComponent implements OnInit {
  @Output() posted = new EventEmitter<CommentItem>();
  newComment: CommentItem;
  whatYouThinkForm = new FormGroup({
    nickName: new FormControl(''),
    comment: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  postComment() {
    this.newComment = new CommentItem();
    this.newComment.owner = this.whatYouThinkForm.value.nickName;
    this.newComment.date = Date.now();
    this.newComment.content = this.whatYouThinkForm.value.comment;
    this.posted.emit(this.newComment);
    console.log(this.whatYouThinkForm);
    this.whatYouThinkForm.reset();
  }
}
