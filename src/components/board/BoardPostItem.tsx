import styled from 'styled-components';

import { post } from '../../interfaces/post';
import Badge from '../common/Badge';

interface BoardPostItemProps {
  post: post
}

const BoardPostItemBlock = styled.div`
  padding: 1.5rem 0;
  border-top: 0.5px solid #AC71EA;
  border-bottom: 0.5px solid #AC71EA;

  & + & {
    border-top: none;
  }

  .user {
    display: flex;
    justify-content: space-between;
    align-items: start;

    .avatar {
      width: 50px;
      height: 50px;
      margin-right: 1rem;
      border-radius: 50%;
    }

    .name {
      flex-grow: 1;

      .username {
        font-weight: 700;
      }

      .badges {
        display: flex;
        list-style: none;
        margin: 0;
        margin-top: 0.25rem;
        padding: 0;
        gap: 0.25rem;
      }
    }
  }

  .text {
    margin-top: 0.75rem;

    .title {
      font-size: 1rem;
      font-weight: 700;
      margin: 0;
    }

    .content {
      font-size: 1rem;
      margin: 0;
      margin-top: 0.25rem;
    }
  }

  .footer {
    margin-top: 1rem;
    gap: 2rem;
  }
`;

const GraySmallText = styled.span`
  color: #555555;
  font-size: 0.625rem;

  & + & {
    margin-left: 1rem;
  }
`;

const BoardItemPost = ({ post }: BoardPostItemProps) => {
  const { title, content, like, comment, releasedDate, user } = post;

  return (
      <BoardPostItemBlock>
        <div className="user">
          <img className="avatar" src={`https://api.multiavatar.com/${user.name}.png`} alt="리우"/>
          <div className="name">
            <div className="username">{ user.name } 님</div>
            <div className="badges">
              <Badge type="mbti" value={ user.mbti }>{ user.mbti }</Badge>
              <Badge type="grade" value={ user.grade }>{ user.grade }</Badge>
            </div>
          </div>
        </div>
        <div className="text">
          <h1 className="title">{ title }</h1>
          <p className="content">{ content }</p>
        </div>
        <div className="footer">
          <GraySmallText>{ releasedDate }</GraySmallText>
          <GraySmallText>공감 { like }</GraySmallText>
          <GraySmallText>댓글 { comment }</GraySmallText>
        </div>
      </BoardPostItemBlock>
  );
}

export default BoardItemPost;
