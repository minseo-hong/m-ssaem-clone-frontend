import styled from 'styled-components';

import Button from '../common/Button';

const BoardHeadingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 1rem;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const BoardHeading = () => {
  return (
    <BoardHeadingBlock>
      <h1>전체 게시판</h1>
      <Button to="/board/post/write">글쓰기</Button>
    </BoardHeadingBlock>
  );
}

export default BoardHeading;
