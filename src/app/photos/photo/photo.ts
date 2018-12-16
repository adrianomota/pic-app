export interface Photo {
  id: number;
  postData: Date;
  url: string;
  description: string;
  allowCOmments: boolean;
  likes: number;
  comments: number;
  userId: number;
}
