import { styled } from 'styled-components';

import { post } from '../../interfaces/post';
import Badge from '../common/Badge';

interface HostPostCardProps { 
  post: post
}

const HotPostCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FAF8FE;
  border-radius: 16px;
  padding: 1.5rem 2rem;

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
      margin: 0;
    }

    .content {
      font-size: 1rem;
      margin: 0;
      margin-top: 0.25rem;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    .right {
      display: flex;
      gap: 1rem;
    }
  }
`;

const GraySmallText = styled.span`
  color: #555555;
  font-size: 0.625rem;
`;

const HotPostCard = ({ post }: HostPostCardProps) => {
  const { title, content, like, comment, releasedDate, user } = post;

  return (
    <HotPostCardBlock>
      <div className="user">
        <img className="avatar" src={`https://api.multiavatar.com/${user.name}.png`} alt={ user.name } />
        <div className="name">
          <div className="username">{ user.name } 님</div>
          <div className="badges">
            <Badge type="mbti" value={ user.mbti }>{ user.mbti }</Badge>
            <Badge type="grade" value={ user.grade }>{ user.grade }</Badge>
          </div>
        </div>
        <GraySmallText>{ releasedDate }</GraySmallText>
      </div>
      <div className="text">
        <h1 className="title">{ title }</h1>
        <p className="content">{ content }</p>
      </div>
      <div className="footer">
        <div className="left">
          <GraySmallText>{ user.mbti }</GraySmallText>
        </div>
        <div className="right">
          <GraySmallText>공감<br />{ like }</GraySmallText>
          <GraySmallText>댓글<br />{ comment }</GraySmallText>
        </div>
      </div>
    </HotPostCardBlock>
  );
}

export default HotPostCard;
