import {Component, Input, OnInit} from '@angular/core';
import {BlogItem} from '../../blog-item.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-item-detail-recent',
  templateUrl: './blog-item-detail-recent.component.html',
  styleUrls: ['./blog-item-detail-recent.component.css']
})
export class BlogItemDetailRecentComponent implements OnInit {
  @Input() currentBlogItem: BlogItem;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // navigate(id) {
  //   const url = '/blog/' + id;
  //   this.router.navigateByUrl(url).then(
  //     e => {
  //       console.log(url);
  //     }
  //   );
  // }
}
