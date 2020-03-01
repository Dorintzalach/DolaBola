export class CommentItem {
  owner: string;
  date: number;
  replies: CommentItem[];
  content: string;
}
