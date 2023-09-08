import { styled } from 'styled-components';
import Responsive from '../common/Responsive';
import LightPurpleRoundedBox from '../common/LightPurpleRoundedBox';
import BoardPostList from './BoardPostList';
import BoardHeading from './BoardHeading';

const BoardSectionBlock = styled(Responsive)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const LightPurpleRoundedWrapper = styled(LightPurpleRoundedBox)`
  padding-bottom: 3rem;
`;

const BoardPage = () => {
  return (
    <BoardSectionBlock>
      <LightPurpleRoundedWrapper>
        <BoardHeading />
        <BoardPostList />
      </LightPurpleRoundedWrapper>
    </BoardSectionBlock>
  );
}

export default BoardPage;
