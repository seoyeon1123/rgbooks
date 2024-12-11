// 가격 포맷팅을 담당하는 함수
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat().format(price) + '원';
};
