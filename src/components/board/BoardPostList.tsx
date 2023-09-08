import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';

import BoardPostItem from './BoardPostItem';
import { postListState } from '../../states/post';

const BoardPostListBlock = styled.div``;

const BoardPostList = () => {
  const postList = useRecoilValue(postListState);

  return (
    <BoardPostListBlock>
      {postList.map((post) => (
        <BoardPostItem key={ post.id } post={post}/>
      ))}
    </BoardPostListBlock>
  );
}

export default BoardPostList;
