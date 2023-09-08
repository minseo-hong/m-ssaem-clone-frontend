import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderLogoProps {
  to: string, 
  src: string, 
  alt: string
}

const HeaderLogoBlock = styled(Link)`
  img {
    width: auto;
    height: 80px;
  }
`;

const HeaderLogo = ({ to, src, alt }: HeaderLogoProps) => {
  return (
    <HeaderLogoBlock to={ to }>
      <img src={require(`../../assets/${src}`)} alt={ alt } />
    </HeaderLogoBlock>
  );
}

export default HeaderLogo;
