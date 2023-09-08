import { styled } from 'styled-components';
import HotPostCardList from './HostPostCardList';
import HotPostTitle from './HotPostTitle';

const HotPostSectionBlock = styled.section`
  margin-top: 2rem;
`;

const HotPostSection = () => {
  return (
    <HotPostSectionBlock>
      <HotPostTitle />
      <HotPostCardList />
    </HotPostSectionBlock>
  );
}

export default HotPostSection;
