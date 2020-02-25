import { Component, OnInit } from '@angular/core';
import {BlogItem} from '../blog-item.model';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  currentBlogItem: BlogItem;
  id: number;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      console.log(this.id);
      this.currentBlogItem = this.blogService.getBlogItem(this.id);
    });
  }

}
