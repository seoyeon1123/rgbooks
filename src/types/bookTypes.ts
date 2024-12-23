export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}

export interface BookDetailType {
  title: string;
  author: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}
