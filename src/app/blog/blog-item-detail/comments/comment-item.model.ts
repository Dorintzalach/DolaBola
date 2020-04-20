export class CommentItem {
  blogItemID: number;
  id: number;
  owner: string;
  date: number;
  replies: CommentItem[];
  content: string;
}
