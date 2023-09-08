import styled from 'styled-components';

interface PostWriteButtonGroupProps {
  children: React.ReactNode
}

const PostWriteButtonGroupBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const PostWriteButtonGroup = ({ children }: PostWriteButtonGroupProps) => {
  return (
    <PostWriteButtonGroupBlock>
      { children }
    </PostWriteButtonGroupBlock>
  );
}

export default PostWriteButtonGroup;
