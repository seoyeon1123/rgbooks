import { atom } from 'recoil';

export interface IBookProps {
  title: string;
  author: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}

export const bookStateAdd = atom<IBookProps>({
  key: 'bookStateAdd',
  default: {
    title: '',
    author: '',
    price: 0,
    quantity: 0,
    imageUrl: '',
    description: '',
  },
});

export const bookEditState = atom<IBookProps>({
  key: 'bookEditState',
  default: {
    title: '',
    author: '',
    price: 0,
    quantity: 0,
    imageUrl: '',
    description: '',
  },
});
