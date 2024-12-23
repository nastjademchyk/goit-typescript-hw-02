export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  likes: number;
}
