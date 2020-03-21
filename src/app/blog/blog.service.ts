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
  private dataStoreAllItems = new BehaviorSubject<BlogItem[]>(INIT_DATA);
  allBlogItem$: Observable<any> = this.dataStoreAllItems.asObservable();
  private dataStoreBlogItem = new BehaviorSubject<BlogItem>(null);
  blogItem$: Observable<any> = this.dataStoreBlogItem.asObservable();
  private dataStoreSetComment = new BehaviorSubject(null);
  updateComment$: Observable<any> = this.dataStoreSetComment.asObservable();

  constructor(private http: HttpClient) {
    this.getBlogItems();
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
            newItem.comments = JSON.parse(data[key][2]);
            result.push(newItem);
          }
        }
        return result;
      })
    ).subscribe((resData: any) => {
      this.blogItems = resData;
      this.dataStoreAllItems.next(resData);
    });
  }

  getBlogItem(id) {
    this.http.get(SERVER_URL + 'getBlogItemById?id=' + id).pipe(map(resData => {
      const theArray = resData[0];
      const newItem: BlogItem = new BlogItem();
      newItem.id = theArray[0];
      newItem.date = theArray[1];
      newItem.title = theArray[3];
      newItem.imagePath = theArray[4];
      newItem.content = JSON.parse(theArray[5]);
      newItem.likes = theArray[6];
      newItem.description = theArray[7];
      newItem.comments = JSON.parse(theArray[2]);
      return newItem;
    })).subscribe((resData: any) => {
      // console.log(resData);
      this.dataStoreBlogItem.next(resData);
    });
  }

  setComment(id: number, comment: any, updateComment: boolean) {
    if (updateComment) {
      if (!this.blogItems[id - 1].comments) {
        const commentsArr: CommentItem[] = [];
        this.blogItems[id - 1].comments = commentsArr;
      }
      this.blogItems[id - 1].comments.push(comment);
    }
    this.http.post(SERVER_URL + 'updateBlogItemComments', {item_ID: id, comment: JSON.stringify(this.blogItems[id - 1].comments)})
      .subscribe((responseData: any[]) => {
        this.dataStoreSetComment.next(responseData);
        this.getBlogItems();
    });
  }

  setReplyToComment(blogItemId: number, commentItemId: number, reply: CommentItem) {
    console.log(this.blogItems);
    // case that first time adding reply to this comment item
    if (!this.blogItems[blogItemId - 1].comments[commentItemId].replies) {
      console.log('created');
      this.blogItems[blogItemId - 1].comments[commentItemId].replies = [];
    }
    this.blogItems[blogItemId - 1].comments[commentItemId].replies.push(reply);
    const commentToUpdate = this.blogItems[blogItemId - 1].comments[commentItemId];
    this.setComment(blogItemId, commentToUpdate, false);
  }
}
