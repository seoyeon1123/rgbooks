import { render, screen, waitFor } from '@testing-library/react';
import SearchPage from '@/app/search/page';
import { useSearchParams } from 'next/navigation';

// useSearchParams 훅을 모킹
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

describe('SearchPage', () => {
  it('should display search results for author "허승희"', async () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (key: string) => {
        if (key === 'query') return '허승희';
        if (key === 'option') return '통합검색';
        return null;
      },
    });

    const mockResults = [
      {
        id: 32,
        title: '엄마의 대화력',
        author: '허승희',
        price: 19000,
        quantity: 12,
        imageUrl:
          'https://hfaergimikwprxpcquxh.supabase.co/storage/v1/object/public/book-image/1733901369593_9791191378634.jpg',
        description:
          '수많은 육아서와 교육 전문가들은 세상의 엄마들에게 이런 부담을 지우고 있다. 하지만 아이의 투정이나 교정되지 않는 행동을 볼 때마다 언성을 높이고 자책하는 나날이 이어지곤 한다. 머리와 마음이 폭발적으로 성장하는 영유아, 초등학교 시기가 중요하다는 것을 알지만, 내 아이에게 맞는 양육법을 찾지 못한 엄마들을 위해 육아 전문가이자 20년 차 선생님인 허승희 작가가 나섰다.\n\n네 아이의 엄마이자 두 아이를 영재교육원에 보낸 저자는 ‘엄마는 아이의 첫 번째 선생님이자 관찰자’라고 말한다. 이 책은 저자가 어떻게 아이의 특징을 잡아내고 어떻게 말해주었는지, 또 아이의 자기효능감을 어떻게 키웠는지 상세히 알려준다. 더불어 영재교육원 면접과 자소서 작성 팁을 통해 스스로 공부하는 아이를 키워낸 엄마의 ‘육아 저력’을 확인할 수 있을 것이다.\n\n무심코 지나친 아이의 영재성을 찾고, 지치지 않고 공부를 이어 나가게 하는 ‘엄마의 단단한 대화법’을 만나보자. 거친 성격의 아이를 타고난 리더로 만드는 결정적 한마디, 부산스러운 아이를 다재다능하게 할 말 그릇, 느린 아이를 끝내 해내는 아이로 바꾸는 맞춤형 처방전, 지나친 예민함을 섬세함으로 다듬는 솔루션이 당신을 기다리고 있다.\n',
        createdAt: '2024-12-11T07:16:37.699Z',
        updatedAt: '2024-12-11T07:16:37.699Z',
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResults),
    });

    render(<SearchPage />);

    await waitFor(() => {
      expect(screen.getByText('엄마의 대화력')).toBeInTheDocument();
    });
  });
});
