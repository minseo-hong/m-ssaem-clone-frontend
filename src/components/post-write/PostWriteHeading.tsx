import styled from 'styled-components';

const PostWriteHeadingBlock = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`;

const PostWriteHeading = () => {
  return (
    <PostWriteHeadingBlock>
      <h1>게시판 글쓰기</h1>
    </PostWriteHeadingBlock>
  );
}

export default PostWriteHeading;
