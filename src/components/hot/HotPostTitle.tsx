import { styled } from 'styled-components';
import Responsive from '../common/Responsive';
import GrayLink from '../common/GrayLink';

const HotPostTitleBlock = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    font-size: 1rem;
  }
`;

const HotPostTitle = () => {
  return (
    <HotPostTitleBlock>
      <h1>HOT 게시물</h1>
      <GrayLink to="/detail" text="바로가기" />
    </HotPostTitleBlock>
  );
}

export default HotPostTitle;
