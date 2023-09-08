import { styled } from 'styled-components';
import GrayLink from '../common/GrayLink';

interface HotCardProps {
  title: string,
  category: string
}

const HotCardBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 1.5rem;
  padding-top: 1.75rem;

  .hot-box {
    position: absolute;
    top: -1rem;
    left: 1rem;
    background-color: #FE5B5C;
    color: #FFFFFF;
    font-size: 0.75rem;
    padding: 0.5rem;
  }

  .text {
    .category {
      color: #7A7A7B;
      font-size: 0.875rem;
      margin: 0;
    }

    .title {
      font-size: 1rem;
      font-weight: 900;
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;

const StyledGrayLink = styled(GrayLink)`
  text-align: right;
  margin-top: 1.5rem;
`;

const HotCard = ({ title, category }: HotCardProps) => {
  return (
    <HotCardBlock>
      <div className="hot-box">HOT</div>
      <div className="text">
        <h2 className="category">{ category }</h2>
        <h1 className="title">{ title }</h1>
      </div>
      <StyledGrayLink to="/detail" text="바로가기"/>
    </HotCardBlock>
  );
}

export default HotCard;
