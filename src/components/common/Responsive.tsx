import styled from 'styled-components';

interface ResponsiveProps {
  children: React.ReactNode
}

const ResponsiveBlock = styled.div`
  width: 60%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Responsive = ({ children, ...rest }: ResponsiveProps) => {
  return (
    <ResponsiveBlock { ...rest }>{ children }</ResponsiveBlock>
  );
}

export default Responsive;
