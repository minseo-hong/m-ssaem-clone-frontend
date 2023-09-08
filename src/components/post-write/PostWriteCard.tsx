import styled from 'styled-components';

import Responsive from '../common/Responsive';

interface PostWriteCardProps {
  children: React.ReactNode
}

const PostWriteCardBlock = styled(Responsive)`
  background-color: #FFFFFF;
  padding: 1.5rem;
`;

const PostWriteCard = ({ children }: PostWriteCardProps) => {
  return (
    <PostWriteCardBlock>
      { children }
    </PostWriteCardBlock>
  );
}

export default PostWriteCard;
