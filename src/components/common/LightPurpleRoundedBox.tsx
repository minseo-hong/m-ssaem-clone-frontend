import { styled } from 'styled-components';

interface LightPurpleRoundedBoxProps {
  children: React.ReactNode
}

const LightPurpleRoundedBoxBlock = styled.div`
  background-color: #FAF8FE;
  border-radius: 16px;
  padding: 1.5rem 2rem;
`

const LightPurpleRoundedBox = ({ children, ...rest }: LightPurpleRoundedBoxProps) => {
  return (
    <LightPurpleRoundedBoxBlock {...rest}>{ children }</LightPurpleRoundedBoxBlock>
  );
}

export default LightPurpleRoundedBox;
