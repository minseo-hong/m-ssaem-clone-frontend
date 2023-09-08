import styled from 'styled-components';
import Responsive from '../common/Responsive';
import HotCard from './HotCard';

const HotCardListBlock = styled(Responsive)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const HotCardList = () => {
  return (
    <HotCardListBlock>
      <HotCard title="t가 되고싶은 f" category="지금의 게시글" />
      <HotCard title="데모데이 힘든 건 MBTI와 관련이 있다 vs 없다" category="지금의 토론" />
      <HotCard title="ㅎㅇㅎ" category="고민 그만! M쌤 매칭" />
      <HotCard title="t가 되고싶은 f" category="지금의 게시글" />
    </HotCardListBlock>
  );
}

export default HotCardList;
