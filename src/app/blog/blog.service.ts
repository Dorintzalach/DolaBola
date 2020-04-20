import { Injectable } from '@angular/core';
import {BlogItem} from './blog-item.model';
import {CommentItem} from './blog-item-detail/comments/comment-item.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';


const INIT_DATA = [];
const SERVER_URL = 'https://n7uqeb2cck.execute-api.us-west-2.amazonaws.com/production/';

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
  private dataStoreRecentPosts = new BehaviorSubject<BlogItem[]>(INIT_DATA);
  recentPosts$: Observable<any> = this.dataStoreRecentPosts.asObservable();
  private dataStoreSetLike = new BehaviorSubject(null);
  updateLikes$: Observable<any> = this.dataStoreSetLike.asObservable();

  constructor(private http: HttpClient) {
    this.getBlogItems();
  }

  getBlogItems() {
    this.http.post(SERVER_URL + 'getAllBlogItems', null).pipe(map(data => {
        const result: BlogItem[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const jsonItem = data[key];
            const newItem = new BlogItem();
            newItem.id = jsonItem.id;
            newItem.date = jsonItem.date;
            newItem.title = jsonItem.title;
            newItem.imagePath = jsonItem.img_path;
            newItem.content = JSON.parse(jsonItem.content);
            newItem.likes = jsonItem.likes;
            newItem.description = jsonItem.description;
            newItem.comments = JSON.parse(jsonItem.comments);
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
      if (resData[0]) {
        const theArray = resData[0];
        const newItem: BlogItem = new BlogItem();
        newItem.id = theArray.id
        newItem.date = theArray.date;
        newItem.title = theArray.title;
        newItem.imagePath = theArray.img_path;
        newItem.content = JSON.parse(theArray.content);
        newItem.likes = theArray.likes;
        newItem.description = theArray.description;
        newItem.comments = JSON.parse(theArray.comments);
        return newItem;
      }
    })).subscribe((resData: BlogItem) => {
      if (resData) {
        this.dataStoreBlogItem.next(resData);
      }
    });
  }

  setComment(id: number, comment: any, updateComment: boolean) {
    console.log(comment);
    console.log(id);
    console.log(this.blogItems[0]);
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

  getRecentPosts() {
    this.http.get(SERVER_URL + 'getRecentPosts').pipe(map(data => {
      const result: BlogItem[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const jsonItem = data[key];
          const newItem = new BlogItem();
          newItem.id = jsonItem.id;
          newItem.date = jsonItem.date;
          newItem.title = jsonItem.title;
          newItem.imagePath = jsonItem.img_path;
          newItem.content = JSON.parse(jsonItem.content);
          newItem.likes = jsonItem.likes;
          newItem.description = jsonItem.description;
          newItem.comments = JSON.parse(jsonItem.comments);
          result.push(newItem);
        }
      }
      return result;
      })
    ).subscribe((resData: BlogItem[]) => {
      console.log(resData);
      this.dataStoreRecentPosts.next(resData);
    });
  }

  setLike(blogItemId: number) {
    console.log(blogItemId);
    if (blogItemId) {
      const likes = this.blogItems[blogItemId].likes + 1;
      this.http.post(SERVER_URL + 'updateBlogItemLikes', {likes_number: likes, item_ID: blogItemId}).subscribe(res => {
        this.dataStoreSetLike.next(res);
      });
    }
  }
}
