import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { newPostIdState, postListState } from '../../states/post';
import PostWriteCard from './PostWriteCard';
import PostWriteHeading from './PostWriteHeading';
import PostWriteForm from './PostWriteForm';
import PostWriteControl from './PostWriteControl';
import PostWriteButtonGroup from './PostWriteButtonGroup';
import Button from '../common/Button';

const PostWriteSectionBlock = styled.section`
  background-color: #FAF8FE;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const PostWriteSection = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postList, setPostList] = useRecoilState(postListState);
  const [newPostId, setNewPostId] = useRecoilState(newPostIdState);

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setPostList([ ...postList, {
      id: newPostId,
      title: title,
      content: content,
      like: 0,
      comment: 0,
      releasedDate: "2023-08-23",
      user: {
        name: "익명",
        mbti: "ESFP",
        grade: "NEWBIE"
      },
      isHot: false
    }]);
    setNewPostId(newPostId + 1);
    setTitle('');
    setContent('');
    navigate('/board');

    e.preventDefault();
  }

  const onCancelButtonClick = () => {
    navigate(-1);
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  return (
    <PostWriteSectionBlock>
      <PostWriteCard>
        <PostWriteHeading />
        <PostWriteForm onSubmit={ onSubmit }>
          <PostWriteControl name="title" label="제목을 입력해주세요." value={ title } onChange={ onTitleChange }/>
          <PostWriteControl name="content" label="내용을 입력해주세요." value={ content } onChange={ onContentChange } textarea/>
          <PostWriteButtonGroup>
            <Button submit>확인</Button>
            <Button onClick={ onCancelButtonClick } cancel>취소</Button>
          </PostWriteButtonGroup>
        </PostWriteForm>
      </PostWriteCard>
    </PostWriteSectionBlock>
  );
}

export default PostWriteSection;
