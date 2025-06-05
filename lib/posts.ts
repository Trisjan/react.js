export type Post = {
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'welkom-bij-mijn-blog',
    title: 'Welkom bij mijn blog',
    content: 'Dit is mijn allereerste blogpost!',
  },
  {
    slug: 'react-tips',
    title: 'React Tips voor Beginners',
    content: 'Hier zijn wat handige tips voor wie met React begint.',
  },
];
