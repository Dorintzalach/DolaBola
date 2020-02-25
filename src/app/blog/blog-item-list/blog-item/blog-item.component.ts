import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../blog-item.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() currentBlogItem: BlogItem;
  @Input() index: number;
  @Input() row: number;
  private id: number;

  constructor() { }

  ngOnInit() {
    this.id = (this.row * 3) + this.index;
  }
}
