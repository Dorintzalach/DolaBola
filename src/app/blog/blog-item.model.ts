import {CommentItem} from './blog-item-detail/comments/comment-item.model';

export class BlogItem {
  title: string;
  date: string;
  likes: number;
  comments: CommentItem[];
  description: string;
  imagePath: string;
  content: object[];
}