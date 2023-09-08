import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';

import Responsive from '../common/Responsive';
import HotPostCard from './HotPostCard';
import { hotPostListState } from '../../states/post';

const HotPostCardListBlock = styled(Responsive)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 676px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const HotPostCardList = () => {
  const hotPostList = useRecoilValue(hotPostListState);

  return (
    <HotPostCardListBlock>
      {hotPostList.map((post) => (<HotPostCard key={ post.id } post={post} />))}
    </HotPostCardListBlock>
  );
}

export default HotPostCardList;
