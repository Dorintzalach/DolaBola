import { Component, OnInit } from '@angular/core';
import {BlogItem} from '../blog-item.model';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-item-list',
  templateUrl: './blog-item-list.component.html',
  styleUrls: ['./blog-item-list.component.css']
})
export class BlogItemListComponent implements OnInit {
  private blogItems: BlogItem[];
  orderedItems = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogItems = this.blogService.getBlogItems();
    this.setNumberOfItemsPerRow(3);
  }

  private setNumberOfItemsPerRow( k: number) {
    for (let i = 0; i < this.blogItems.length; i += k) {
      this.orderedItems.push({ items: this.blogItems.slice(i, i + k) });
    }
  }
}
