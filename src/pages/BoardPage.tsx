import { styled } from 'styled-components';
import Header from '../components/header/Header';
import BoardSection from '../components/board/BoardSection';

const BoardPageBlock = styled.div``;

const BoardPage = () => {
  return (
    <BoardPageBlock>
      <Header />
      <BoardSection />
    </BoardPageBlock>
  );
}

export default BoardPage;
