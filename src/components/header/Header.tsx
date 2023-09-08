import styled from 'styled-components';

import HeaderHeading from './HeaderHeading';
import HeaderNavbar from './HeaderNavbar';
import Responsive from '../common/Responsive';
import MobileHeaderNavbar from './MobileHeaderNavbar';

const HeaderBlock = styled.div``;

const FixedHeaderWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 10rem;
  background-color: #FFFFFF;
  padding-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 7px 0px;
`;

const Spacer = styled.div`
  height: 10rem;
`;

const ResponsiveWrapper = styled(Responsive)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <FixedHeaderWrapper>
        <ResponsiveWrapper>
          <HeaderHeading />
          <HeaderNavbar />
          <MobileHeaderNavbar />
        </ResponsiveWrapper>
      </FixedHeaderWrapper>
      <Spacer />
    </HeaderBlock>
  );
}

export default Header;
