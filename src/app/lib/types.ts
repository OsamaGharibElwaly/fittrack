// lib/types.ts
export type User = {
  name: string;
  role: string;
  avatar: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  author: User;
  timeAgo: string;
  tags: string[];
  likes: number;
  favorites: number;
};