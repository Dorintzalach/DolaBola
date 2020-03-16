import {CommentItem} from './blog-item-detail/comments/comment-item.model';

export class BlogItem {
  id: number;
  title: string;
  date: number;
  likes: number;
  comments: CommentItem[];
  description: string;
  imagePath: string;
  content: object[];
}
