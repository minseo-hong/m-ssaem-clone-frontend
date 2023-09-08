import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface GrayLinkProps {
  to: string,
  text: string
}

const GrayLinkBlock = styled(Link)`
  color: #7A7A7B;
  font-size: 0.75rem;
`;

const GrayLink = ({ to, text, ...rest }: GrayLinkProps) => {
  return (
    <GrayLinkBlock to={ to } { ...rest }>{ text }</GrayLinkBlock>
  );
}

export default GrayLink;
