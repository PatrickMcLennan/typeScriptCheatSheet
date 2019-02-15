// Interfaces
export interface Person {
  name: string;
  age?: number;
}
export enum TypeString {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ'
}
export enum TypeNumeric {
  Video, // 0
  BlogPost, // 1
  Quiz // 2...
}
