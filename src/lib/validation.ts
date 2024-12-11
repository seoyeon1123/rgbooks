import { z } from 'zod';

export const bookSchema = z.object({
  title: z.string().min(1, '제목은 필수입니다'),
  author: z.string().min(1, '저자는 필수입니다'),
  price: z.number().min(1000, '가격은 1000원 이상이어야 합니다'),
  quantity: z.number().int().min(1, '수량은 1 이상이어야 합니다'),
  imageUrl: z.string().url('유효한 URL이어야 합니다').optional(),
  description: z.string().min(10, '책에 대한 소개를 10글자 이상 입력해주세요. ').optional(),
});
