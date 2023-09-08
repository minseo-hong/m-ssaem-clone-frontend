import styled from 'styled-components';

import Header from '../components/header/Header';
import PostWriteSection from '../components/post-write/PostWriteSection';

const PostWritePageBlock = styled.div``;

const PostWritePage = () => {
  return (
    <PostWritePageBlock>
      <Header />
      <PostWriteSection />
    </PostWritePageBlock>
  );
}

export default PostWritePage;
