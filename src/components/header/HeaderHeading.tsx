import styled from 'styled-components';

import Button from '../common/Button';
import HeaderLogo from './HeaderLogo';

const HeaderHeadingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderHeading = () => {
  return (
    <HeaderHeadingBlock>
      <HeaderLogo to="/" src="logo/logo.png" alt="m-ssaem-logo" />
      <Button to="/login">로그인하고 이용하기</Button>
    </HeaderHeadingBlock>
  );
}

export default HeaderHeading;
