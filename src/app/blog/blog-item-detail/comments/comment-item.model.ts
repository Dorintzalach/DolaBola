export class CommentItem {
  id: number;
  owner: string;
  date: number;
  replies: CommentItem[];
  content: string;
}
