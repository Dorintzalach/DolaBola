import { Injectable } from '@angular/core';
import {BlogItem} from './blog-item.model';
import {CommentItem} from './blog-item-detail/comments/comment-item.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';


const INIT_DATA = [];
const SERVER_URL = 'http://127.0.0.1:5000/';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogItems: BlogItem[];
  private dataStore = new BehaviorSubject(INIT_DATA);
  data$: Observable<any> = this.dataStore.asObservable();
  blogItem$: Observable<any> = this.dataStore.asObservable();

  constructor(private http: HttpClient) {
  }

  getBlogItems() {
    this.http.post(SERVER_URL + 'getAllBlogItems', null).pipe(map(data => {
        const result: BlogItem[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const newItem = new BlogItem();
            newItem.id = data[key][0];
            newItem.date = data[key][1];
            newItem.title = data[key][3];
            newItem.imagePath = data[key][4];
            newItem.content = JSON.parse(data[key][5]);
            newItem.likes = data[key][6];
            newItem.description = data[key][7];
            result.push(newItem);
          }
        }
        return result;
      })
    ).subscribe((resData: any) => {
        this.blogItems = resData;
        console.log(resData);
        this.dataStore.next(resData);
    });
  }

  getBlogItem(id) {
     // this.http.get(SERVER_URL + 'getBlogItemById?id=' + id).subscribe((resData: any) => {
     //   this.dataStore.next(resData);
     // });
    console.log(this.blogItems[id]);
    return this.blogItems[id];
  }

  setComment(id: number, comment: CommentItem) {
    // this.http.post(SERVER_URL + 'updateBlogItemComments', {item_ID: id, comment: JSON.stringify(comment)}).subscribe((responseData: any[]) => {
    //   console.log(responseData);
    //   this.blogItems = responseData;
    // });
    // this.blogItems[id].comments.push(comment);
  }

  setReplyToComment(blogItemId: number, commentItemId: number, reply: CommentItem) {
    console.log(blogItemId);
    console.log(commentItemId);
    this.blogItems[blogItemId].comments[commentItemId].replies.push(reply);
  }
}
