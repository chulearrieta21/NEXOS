type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  slug: string;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  location: string;
  readTime: string;
  quote: string;
  content: string[];
  highlights: string[];
};
