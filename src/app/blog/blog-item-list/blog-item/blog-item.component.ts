import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../blog-item.model';
import {BlogService} from '../../blog.service';

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
  observerBlogItem$ = this.blogService.blogItem$;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    // console.log(this.currentBlogItem);
    if (!this.currentBlogItem) {
      this.blogService.getBlogItem(this.id);
      this.observerBlogItem$.subscribe(res => {
        console.log(res);
        this.currentBlogItem = res;
      });
    }
    this.id = (this.row * 3) + this.index;
  }
}
