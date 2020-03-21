import { Component, OnInit } from '@angular/core';
import {BlogItem} from '../blog-item.model';
import {BlogService} from '../blog.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog-item-list',
  templateUrl: './blog-item-list.component.html',
  styleUrls: ['./blog-item-list.component.css']
})
export class BlogItemListComponent implements OnInit {
  blogItems: BlogItem[] = null;
  orderedItems = [];
  observer$ = this.blogService.allBlogItem$;


  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogItems();
    this.observer$.subscribe(data => {
        console.log('blog items changed');
        this.blogItems = data;
        this.setNumberOfItemsPerRow(3);
    });
  }

  private setNumberOfItemsPerRow( k: number) {
    for (let i = 0; i < this.blogItems.length; i += k) {
      this.orderedItems.push({ items: this.blogItems.slice(i, i + k) });
    }
  }
}
