import {Component, Input, OnInit} from '@angular/core';
import {CommentItem} from '../comment-item.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() currentComment: CommentItem;

  constructor() { }

  ngOnInit() {
  }

}
