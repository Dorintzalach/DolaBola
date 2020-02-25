export class CommentItem {
  owner: string;
  date: string;
  replies: CommentItem[];
  content: string;
}
