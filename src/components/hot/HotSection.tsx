import { styled } from 'styled-components';
import HotCardList from './HotCardList';

const HotSectionBlock = styled.section`
  background-color: #F4EFFF;
`;

const HotSection = () => {
  return (
    <HotSectionBlock>
      <HotCardList />
    </HotSectionBlock>
  );
}

export default HotSection;
