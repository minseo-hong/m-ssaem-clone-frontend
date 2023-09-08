import { styled } from 'styled-components';
import Header from '../components/header/Header';
import HotSection from '../components/hot/HotSection';
import HotPostSection from '../components/hot/HotPostSection';

const HomePageBlock = styled.div``;

const HomePage = () => {
  return (
    <HomePageBlock>
      <Header />
      <HotSection />
      <HotPostSection />
    </HomePageBlock>
  );
}

export default HomePage;
